"use client";

import {taskReducer} from "@/reducers/taskReducer";
import {TaskType} from "@/types/TaskType";
import React, {createContext, useContext, useEffect, useReducer} from "react";

export type TasksContextType = {
  task: TaskType[];
  dispatch: React.Dispatch<TaskActionType>;
};

export type TaskActionType =
  | {type: "ADD_DATA"; data: TaskType[]}
  | {type: "ADD_TASK"; data: TaskType}
  | {type: "CHANGE_STATE"; id: string}
  | {
      type: "CHANGE_TASK_THEME";
      id: string;
      theme: "any" | "personal" | "work" | "study";
    }
  | {type: "REMOVE_TASK"; id: string}
  | {type: "CHANGE_TASK_TITLE"; id: string; title: string};

const TasksListContext = createContext<TasksContextType | undefined>(undefined);

export function TasksProvider({children}: {children: React.ReactNode}) {
  const [task, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const data: TaskType[] = JSON.parse(localStorage.getItem("todos") || "[]");
    dispatch({type: "ADD_DATA", data: data});
  }, []);
  return (
    <TasksListContext.Provider value={{task, dispatch}}>
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
