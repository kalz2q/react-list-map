import React, { useEffect, useState } from "react";
import "./App.css";

type TodoItem = {
  id: number;
  content: string;
};
const todos: TodoItem[] = [
  { id: 1, content: "do something" },
  { id: 2, content: "go somewhere" },
];

const listTodos = todos.map((todo: TodoItem) => {
  return (
    <li key={todo.id}>
      <h2>{todo.content}</h2>
    </li>
  );
});

function App() {
  useEffect(() => {
    document.title = "react-list-map-samples";
  });

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
      <ul>{listTodos}</ul>
    </div>
  );
}

export default App;
