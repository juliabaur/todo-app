import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([
    'First To-Do',
    'Second To-Do',
    'Third To-Do',
    ]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
    if (newTodo.trim()) {
        setTodos([...todos, newTodo]);
        setNewTodo(''); // Eingabefeld leeren
    }
    };

return (
    <div>
        <h1>My To-Do List</h1>
        <TodoList todos={todos} />
        <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New task"
        />
        <button onClick={handleAddTodo}>Add To-Do</button>
    </div>
    );
}

export default App;
