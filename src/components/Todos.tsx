"use client";

import { useTodos } from "@/store/todos";
import { todo } from "node:test";

function Todos() {
  const { todos } = useTodos();
  console.log(todos);

  let filterTodos = [...todos];
  console.log(todos);

  return (
    <ul>
      {filterTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            name=""
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodoAsCompleted(todo.id)}
          />
          <label htmlFor={`toggle-${todo.id}`}>{todo.task}</label>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
