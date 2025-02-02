function TodoList({ todos, onDone }) {
    return (
        <div>
        <h2>To-Do List</h2>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>{todo}
            <button onClick={() => onDone(index)}>Done</button>
            {/* ✅ Done-Button */}
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default TodoList;