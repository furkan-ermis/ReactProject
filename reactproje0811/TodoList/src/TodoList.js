import React, { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>TODO LİST</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button className="btn btn-primary" onClick={addTodo}>
        Ekle
      </button>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
