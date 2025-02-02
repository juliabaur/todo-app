import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([
    'First To-Do',
    'Second To-Do',
    'Third To-Do',
    ]);

    return (
    <div>
        <h1>My To-Do List</h1>
        <TodoList todos={todos} />
    </div>
    );
}

export default App;
