"use client";

import {useTasksList} from "@/context/TasksContext";
import {refreshTasks} from "@/refreshTasks";
import {useCallback, useState} from "react";

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

export default function ToDoForm() {
  const [taskName, setTaskName] = useState<string>("");
  const {setAllTasks} = useTasksList();

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskType = {
      id: (Math.random() * 1000).toString(),
      title: taskName,
      completed: false,
    };

    const taskList: TaskType[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );

    const newList = JSON.stringify([...taskList, newTask]);

    localStorage.setItem("todos", newList);
    refreshTasks(setAllTasks);
    setTaskName("");
  };

  const changeTaskName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskName(e.target.value);
    },
    []
  );

  return (
    <form onSubmit={addNewTask} className="flex">
      <label htmlFor="Task name" className="flex flex-1 mr-[10px]">
        <input
          type="text"
          value={taskName}
          onChange={(e) => changeTaskName(e)}
          placeholder="Enter the name of your task here"
          className="border rounded p-[5px] text-[25px] flex-1"
        />
      </label>
      <button type="submit" className="border rounded p-[5px] size-[50px]">
        <span className="text-[40px]/[1] text-center">+</span>
      </button>
    </form>
  );
}
