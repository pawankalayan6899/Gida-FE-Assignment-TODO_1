import React, { useState } from 'react';
import { createTodo } from '../services/api'; // sends a request to the backend for creating a new to-do item.

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = await createTodo(title);
      onAdd(newTodo);
      setTitle('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new todo..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;


// comments on the componet use age

This component lets users add items to a to-do list.

  * When the user types their to-do item in the input field.
  * When the user clicks "Add", the component sends the item to the list.
  * The input field is cleared, so the user can add another item.
