import Image from "next/image";
import AddTodo from "../components/AddTodo";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main>
      <h2>TODO Next + Typescript</h2>
      <AddTodo />
      <Todos />
    </main>
  );
}
