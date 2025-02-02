import React, { useState } from 'react';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  const [todos, setTodos] = useState([
    'First To-Do',
    'Second To-Do',
    'Third To-Do',
  ]);
  const [doneTodos, setDoneTodos] = useState([]); // ✅ Hier speichern wir erledigte To-Dos
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDone = (index) => {
    const completedTodo = todos[index];
    setDoneTodos([...doneTodos, completedTodo]); // In die Done-Liste verschieben
    setTodos(todos.filter((_, i) => i !== index)); // Aus der ursprünglichen Liste entfernen
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoList todos={todos} onDone={handleDone} />
      
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>

      <DoneList doneTodos={doneTodos} />
    </div>
  );
}

export default App;
