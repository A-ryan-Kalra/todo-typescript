import Image from "next/image";
import AddTodo from "../components/AddTodo";
import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-[100vh] bg-black/10 ">
      <div className="flex flex-col items-center top-[25%] relative translate-y-[-25%] gap-4">
        <Navbar />
        <h2 className="">TODO Next + Typescript</h2>
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
}
