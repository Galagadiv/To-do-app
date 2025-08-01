"use client";

import {TaskType} from "@/components/ToDoForm";
import {useTasksList} from "@/context/TasksContext";

export default function useFilterTasks(): TaskType[] {
  const {allTasks, filter} = useTasksList();
  if (allTasks.length === 0) return [];

  let filtered: TaskType[] = [];

  switch (filter) {
    case 0:
      return allTasks.filter((el) => el.completed);
    case 1:
      return allTasks.filter((el) => !el.completed);
    case 2:
      return allTasks;
  }

  return filtered;
}
