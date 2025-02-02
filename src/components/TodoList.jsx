function TodoList({ todos, onDone, onDelete }) {
    return (
      <div>
        <h2>To-Do List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.text}</strong> <br />
              Start: {todo.startDate} | End: {todo.endDate}
              <button onClick={() => onDone(index)}>Done</button> 
              <button onClick={() => onDelete(index)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  