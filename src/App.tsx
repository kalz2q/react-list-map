import React, { useEffect, useState } from "react";
import "./App.css";

type TodoItem = {
  id: number;
  content: string;
};

function App() {
  useEffect(() => {
    document.title = "react-list-map-samples";
  });

  const todos: TodoItem[] = [
    { id: 1, content: "do something" },
    { id: 2, content: "go somewhere" },
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ol className="todo-list">
        {todos.map((todo: TodoItem) => {
          return (
            <li className="todo-item" key={todo.id}>
              <span className="todo-item__text">{todo.content}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
