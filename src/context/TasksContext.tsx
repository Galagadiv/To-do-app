"use client";

import {TaskType} from "@/components/ToDoForm";
import {createContext, useContext, useEffect, useState} from "react";

type TasksContextType = {
  allTasks: TaskType[];
  setAllTasks: (tasks: TaskType[]) => void;
  filter: number;
  setFilter: (filter: number) => void;
};

const TasksListContext = createContext<TasksContextType | undefined>(undefined);

export function TasksProvider({children}: {children: React.ReactNode}) {
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState<number>(2);

  useEffect(() => {
    const data: TaskType[] = JSON.parse(localStorage.getItem("todos") || "[]");
    setAllTasks(data);
  }, []);
  return (
    <TasksListContext.Provider
      value={{allTasks, setAllTasks, filter, setFilter}}
    >
      {children}
    </TasksListContext.Provider>
  );
}

export const useTasksList = () => {
  const context = useContext(TasksListContext);
  if (!context) {
    throw new Error("useTasksList access error");
  }
  return context;
};
