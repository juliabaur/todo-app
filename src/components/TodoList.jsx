import { useState } from "react";

function TodoList({ todos, onDone, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");

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
            <button onClick={() => setEditIndex(index)}>✏️ Edit</button>

            {editIndex === index && (
              <div>
                <input
                  type="date"
                  value={newStartDate}
                  onChange={(e) => setNewStartDate(e.target.value)}
                />
                <input
                  type="date"
                  value={newEndDate}
                  onChange={(e) => setNewEndDate(e.target.value)}
                />
                <button
                  onClick={() => {
                    onEdit(index, newStartDate, newEndDate);
                    setEditIndex(null);
                    setNewStartDate("");
                    setNewEndDate("");
                  }}
                >
                  ✅ Save
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
