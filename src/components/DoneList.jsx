function DoneList({ doneTodos }) {
    return (
      <div>
        <h2>Done List</h2>
        <ul>
          {doneTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default DoneList;
  