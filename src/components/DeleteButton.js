import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className='btn-item btn-item__delete' onClick={() => onDelete(id)}>Delete</button>
}
 
export default DeleteButton;