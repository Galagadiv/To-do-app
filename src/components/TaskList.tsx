"use client";

import useFilteredTasks from "@/hooks/useFilteredTasks";
import ToDoItem from "./ToDoItem";

export default function TaskList() {
  const taskList = useFilteredTasks();

  return (
    <ul className="p-[5px] border rounded">
      {taskList?.map((el) => (
        <li key={el.id} className="not-last:border-b">
          <ToDoItem id={el.id} completed={el.completed} title={el.title} />
        </li>
      ))}
    </ul>
  );
}
