function DoneList({ doneTodos, onDelete }) {
    return (
      <div>
        <h2>Done List</h2>
        <ul>
          {doneTodos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => onDelete(index)}>❌ Delete</button> {/* ✅ Löschen-Button */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DoneList;
  