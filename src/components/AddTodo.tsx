"use client";
import { useTodos } from "@/store/todos";
import { FormEvent, useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add something"
        className="outline-none p-2 rounded-lg shadow-md focus:ring-2 focu"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="p-2 rounded-lg shadow-md ml-2 hover:bg-black/10 "
        type="submit"
      >
        ADD
      </button>
    </form>
  );
}
