"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import { todo } from "node:test";

function Todos() {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");
  console.log(todos);

  let filterTodos = todos;
  if (todosFilter === "active") {
    filterTodos = filterTodos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filterTodos = filterTodos.filter((todo) => todo.completed);
  }
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
          <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

          {todo.completed && (
            <button
              type="button"
              className="bg-gray-400 p-2   rounded-lg"
              onClick={() => handleTodoDelete(todo.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
