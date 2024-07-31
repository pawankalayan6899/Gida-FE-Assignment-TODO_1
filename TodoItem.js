import React from 'react';

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <div>
                <button onClick={() => completeTodo(todo.id)}>Complete</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;



--------------------------------------------------------------------------------------

Here I'm using React component which renders a single todo item in a list. 
I'm taking three props:
1. todo: An object representing the todo item, including its title and whether it's completed.
2. completeTodo: A function to call when the "Complete" button is clicked, to mark the todo as completed.
3. deleteTodo: A function to call when the "Delete" button is clicked, to remove the todo from the list.

Now the component displays the todo title with a line-through if it's completed. 
It also includes two buttons:

Complete: Marks the todo as completed when clicked.
Delete: Removes the todo from the list when clicked.
