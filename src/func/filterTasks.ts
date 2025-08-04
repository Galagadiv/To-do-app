"use client";

import {useTasksList} from "@/context/TasksContext";
import {TaskType} from "@/types/TaskType";

export default function filterTasks(): TaskType[] {
  const {task, filter} = useTasksList();
  if (task.length === 0) return [];

  let filtered: TaskType[] = [];

  switch (filter) {
    case 0:
      return task.filter((el) => el.completed);
    case 1:
      return task.filter((el) => !el.completed);
    case 2:
      return task;
  }

  return filtered;
}
