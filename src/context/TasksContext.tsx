"use client";

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

function taskReducer(state: TaskType[], action: TaskActionType): TaskType[] {
  let newList: TaskType[] = [];

  switch (action.type) {
    case "ADD_DATA":
      newList = [...state, ...action.data];
      break;
    case "ADD_TASK":
      newList = [...state, action.data];
      break;
    case "CHANGE_STATE":
      newList = state.map((el) =>
        el.id === action.id ? {...el, completed: !el.completed} : el
      );
      break;
    case "CHANGE_TASK_THEME":
      newList = state.map((el) =>
        el.id === action.id ? {...el, theme: action.theme} : el
      );
      break;
    case "REMOVE_TASK":
      newList = state.filter((el) => el.id !== action.id);
      break;
    case "CHANGE_TASK_TITLE":
      newList = state.map((el) =>
        el.id === action.id ? {...el, title: action.title} : el
      );
      break;
    default:
      console.log(`Probably wrong action.type. It is: ${(action as any).type}`);
      newList = state;
      break;
  }
  localStorage.setItem("todos", JSON.stringify(newList));
  return newList;
}

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
