import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;


---------------------------------------------------------------------------------------------------

// The TodoList component acts as a container for the TodoItem components, 
which provides a structured list of todos and delegating the handling of interactions to the individual TodoItem components.
