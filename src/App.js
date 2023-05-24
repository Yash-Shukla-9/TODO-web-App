import React, { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputText });
      setInputText("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="todo-app">
      <h1 className="heading">Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="btn-add" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="btn-dele" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
