import './list.css';

export default function List({ name, onEdit, onDelete }) {
    return(
        <>
            <div className='DoList'>
                <p className='task-text'>{name}</p>
                <div className='btn-group'>
                    <button className='btn btn-edit' onClick={onEdit}>Edit</button>
                    <button className='btn btn-delete' onClick={onDelete}>Delete</button>
                </div>
            </div>
        </>
    );
}