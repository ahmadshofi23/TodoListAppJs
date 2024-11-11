import React, { useEffect, useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch the list of todos from the API endpoint
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 100))) // Display only the first 10 todos for brevity
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
