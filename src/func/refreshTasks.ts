"use client";

import {TaskType} from "@/types/TaskType";

export function refreshTasks(
  setAllTasks:
    | React.Dispatch<React.SetStateAction<TaskType[]>>
    | ((tasks: TaskType[]) => void)
) {
  const resp: string = localStorage.getItem("todos") ?? "[]";
  const tasks: TaskType[] = JSON.parse(resp);

  setAllTasks(tasks);
}
