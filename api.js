import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';  // Setting Up the API

//Fetching To-Do Items

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 20);  // Fetching first 20 items
};

//Creating a New To-Do

export const createTodo = async (title) => {
  const response = await axios.post(API_URL, { title, completed: false });
  return response.data;
};

// Updating an Existing To-Do

export const updateTodo = async (id, completed) => {
  const response = await axios.patch(`${API_URL}/${id}`, { completed });
  return response.data;
};

//Deleting a To-Do

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
