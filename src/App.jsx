import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  const [doneTodos, setDoneTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('doneTodos')) || [];
  });

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('doneTodos', JSON.stringify(doneTodos));
  }, [doneTodos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDone = (index) => {
    const completedTodo = todos[index];
    setDoneTodos([...doneTodos, completedTodo]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleDeleteDone = (index) => {
    setDoneTodos(doneTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoList todos={todos} onDone={handleDone} onDelete={handleDeleteTodo} />
      
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>

      <DoneList doneTodos={doneTodos} onDelete={handleDeleteDone} />
    </div>
  );
}

export default App;
