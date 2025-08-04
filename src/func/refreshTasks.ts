"use client";

import {ActionType} from "@/context/TasksContext";
import {TaskType} from "@/types/TaskType";

export function refreshTasks(dispatch: React.Dispatch<ActionType>) {
  const resp: string = localStorage.getItem("todos") ?? "[]";
  const tasks: TaskType[] = JSON.parse(resp);

  dispatch({type: "ADD_DATA", data: tasks});
}
