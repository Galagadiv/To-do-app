"use client";

import {useTasksList} from "@/context/TasksContext";
import {TaskTheme, TaskType} from "@/types/TaskType";
import {useState} from "react";

export default function ToDoForm() {
  const [taskName, setTaskName] = useState<string>("");
  const [taskTheme, setTaskTheme] = useState<TaskTheme>("any");
  const {dispatch} = useTasksList();

  const addNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim().length == 0) return;

    let id =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

    const newTask: TaskType = {
      id: id,
      title: taskName,
      completed: false,
      theme: taskTheme,
    };

    dispatch({type: "ADD_TASK", data: newTask});
    setTaskName("");
  };

  const changeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={(e) => addNewTask(e)} className="flex gap-[10px]">
      <label className="flex flex-1">
        <input
          type="text"
          name="Task name field"
          value={taskName}
          onChange={(e) => changeTaskName(e)}
          placeholder="Enter the name of your task here"
          className="border rounded p-[5px] sm:text-[1.5rem]/[1] flex-1 focus:outline-none focus:ring-2 focus:ring-white-500"
        />
      </label>
      <div className="relative w-40">
        <select
          id="task-theme"
          name="Тема завдання"
          className="appearance-none w-full text-[1.5rem]/[1] 
               border bg-black text-white rounded h-full
               p-[5px] pr-10 cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
          onChange={(e) => setTaskTheme(e.target.value as TaskTheme)}
        >
          <option value="any">Усі</option>
          <option value="personal">Особисте</option>
          <option value="work">Робота</option>
          <option value="study">Навчання</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
          ▼
        </div>
      </div>
      <button
        type="submit"
        className="border rounded p-[5px] min-w-[3rem] cursor-pointer hover:outline-none hover:ring-2 hover:ring-white-500"
      >
        <span className="text-[2.5rem]/[1] text-center">+</span>
      </button>
    </form>
  );
}
