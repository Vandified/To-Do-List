import React, { useState, useRef, useEffect } from 'react';
import List from '../list/list.js';
import './Ui.css';
import { useAuth } from '../AuthProvider';

import { db } from '../firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
  
function Ui() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);
  // Inside Ui() component
const { user } = useAuth();


useEffect(() => {
  if (!user) return;

  const todosRef = collection(db, 'todos');
  const q = query(todosRef, where('userId', '==', user.uid));
  const unsub = onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTodos(tasks);
  });

  return () => unsub();
}, [user]);

const addOrEditTodo = async () => {
  if (!task.trim()) return;
  try {
    if (editId) {
      await updateDoc(doc(db, 'todos', editId), { text: task });
      setEditId(null);
    } else {
      await addDoc(collection(db, 'todos'), {
        text: task,
        done: false,
        userId: user.uid,
        createdAt: new Date(),
      });
    }
    setTask('');
    inputRef.current?.focus();
  } catch (err) {
    console.error('❌ Failed to save todo:', err);
  }
};


  const startEdit = (id, currentText) => {
    setTask(currentText);
    setEditId(id);
    inputRef.current?.focus();
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
    if (editId === id) {
      setEditId(null);
      setTask('');
    }
  };

  return (
    <div className="Ui-Container">
      <h1 className="head">To Do List</h1>
      <p className="msg">Add, Edit Or Delete</p>

      <div className="inputContainer">
        <input
          id="inputTask"
          type="text"
          placeholder="Enter the name"
          value={task}
          ref={inputRef}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id="btn-Add" onClick={addOrEditTodo}>
          {editId ? 'Edit' : 'Add'}
        </button>
      </div>

      <div className="todo-list-wrapper">
        {todos.map((todo) => (
          <List
            key={todo.id}
            name={todo.text}
            onEdit={() => startEdit(todo.id, todo.text)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ui;
