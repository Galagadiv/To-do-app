"use client";

import FilterBar from "@/components/FilterBar";
import NavBar from "@/components/NavBar";
import TaskList from "@/components/TaskList";
import ToDoForm from "@/components/ToDoForm";

export default function Home() {
  // localStorage.clear();
  return (
    <>
      <header className="flex flex-col w-full w-[90%] sm:w-[80%] mx-auto gap-[10px]">
        <NavBar />
        <h1 className="text-[2.5rem] text-center pt-[50px]">To-do list</h1>
      </header>
      <main className="flex flex-col w-full w-[90%] sm:w-[80%] mt-[20px] mx-auto gap-[10px]">
        <ToDoForm />
        <FilterBar />
        <TaskList />
      </main>
    </>
  );
}
