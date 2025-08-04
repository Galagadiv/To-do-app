"use client";

import FilterBar from "@/components/FilterBar";
import NavBar from "@/components/NavBar";
import ToDoForm from "@/components/ToDoForm";
import ToDoItem from "@/components/ToDoItem";
import useFilterTasks from "@/hooks/useFilterTasks";

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
        <ul className="p-[5px] border rounded">
          {useFilterTasks()?.map((el) => (
            <li key={el.id} className="not-last:border-b">
              <ToDoItem id={el.id} completed={el.completed} title={el.title} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
