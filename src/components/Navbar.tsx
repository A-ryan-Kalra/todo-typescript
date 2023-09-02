"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { todo } from "node:test";
export default function Navbar() {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");

  console.log("navbar " + todosFilter);
  return (
    <nav className="space-x-3">
      <Link className={todosFilter === null ? "active" : ""} href="/">
        All
      </Link>
      <Link
        className={todosFilter === "active" ? "active" : ""}
        href="/?todo=active"
      >
        Active
      </Link>
      <Link
        className={todosFilter === "completed" ? "active" : ""}
        href="/?todo=completed"
      >
        Completed
      </Link>
    </nav>
  );
}
