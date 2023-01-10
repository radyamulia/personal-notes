import React from 'react';
import PropTypes from 'prop-types'
 
function DeleteButton({ id, onDelete }) {
  return <button className='btn-item btn-item__delete' onClick={() => onDelete(id)}>Delete</button>
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default DeleteButton;