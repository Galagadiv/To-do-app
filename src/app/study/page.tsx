"use client";

import FilterBar from "@/components/FilterBar";
import ToDoForm from "@/components/ToDoForm";
import ToDoItem from "@/components/ToDoItem";
import useFilterTasks from "@/hooks/filterTasks";

export default function Home() {
  // localStorage.clear();
  return (
    <main className="flex flex-col w-full justify-center">
      <h1 className="text-[40px] text-center pt-[50px]">To-do list</h1>
      <div className="flex flex-col w-[80%] mt-[20px] mx-auto gap-[10px]">
        <ToDoForm />
        <FilterBar />
        <ul className="p-[5px] border rounded">
          {useFilterTasks()?.map((el) => (
            <li key={el.id} className=" not-last:border-b">
              <ToDoItem id={el.id} completed={el.completed} title={el.title} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
