function TodoList({ todos, onDone, onDelete }) {
    return (
      <div>
        <h2>To-Do List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} 
              <button onClick={() => onDone(index)}>Done</button> 
              <button onClick={() => onDelete(index)}>❌ Delete</button> {/* ✅ Löschen-Button */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  