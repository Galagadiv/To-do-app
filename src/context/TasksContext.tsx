"use client";

import {TaskType} from "@/components/ToDoForm";
import {createContext, useContext, useEffect, useState} from "react";

const TasksListContext = createContext<
  | {
      tasksList: TaskType[] | undefined;
      setTasksList: React.Dispatch<
        React.SetStateAction<TaskType[] | undefined>
      >;
    }
  | undefined
>(undefined);

export function TasksProvider({children}: {children: React.ReactNode}) {
  const [tasksList, setTasksList] = useState<TaskType[] | undefined>();

  useEffect(() => {
    setTasksList(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  return (
    <TasksListContext.Provider value={{tasksList, setTasksList}}>
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
