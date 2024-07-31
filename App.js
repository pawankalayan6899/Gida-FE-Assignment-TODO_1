import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles/styles.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Load todos from localStorage when the component mounts
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        } else {
            // Fetch todos from API if no todos are saved in localStorage
            const fetchTodos = async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
                setTodos(response.data);
                localStorage.setItem('todos', JSON.stringify(response.data));
            };
            fetchTodos();
        }
    }, []);

    // Save todos to localStorage whenever the todos state changes

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: newTodo,
            completed: false
        });
        const newTodos = [...todos, response.data];
        setTodos(newTodos);
        setNewTodo('');
    };

    const completeTodo = id => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="container mx-auto p-4">
            <Header />
            <div className="add-todo flex flex-col md:flex-row items-center mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                    className="p-2 text-lg mb-2 md:mb-0 md:flex-1"
                />
                <button
                    onClick={addTodo}
                    className="p-2 text-lg bg-blue-500 text-white rounded-md cursor-pointer"
                >
                    Add Task
                </button>
            </div>
            <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
