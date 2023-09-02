"use client";
import { todo } from "node:test";
import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todos);
  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
    // console.log(todos);
  };
  const toggleTodoAsCompleted = (id: string) => {};
  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted }}
    >
      {children}
    </todosContext.Provider>
  );
};

export function useTodos() {
  const todosContextValue = useContext(todosContext);
  //   console.log(todosContext);
  if (!todosContextValue) {
    throw new Error("UseTodos used outside of a provider");
  }
  return todosContextValue;
}
