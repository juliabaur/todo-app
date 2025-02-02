function DoneList({ doneTodos, onDelete }) {
    return (
      <div>
        <h2>Done List</h2>
        <ul>
          {doneTodos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.text}</strong> <br />
              Start: {todo.startDate} | End: {todo.endDate}
              <button onClick={() => onDelete(index)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DoneList;
  