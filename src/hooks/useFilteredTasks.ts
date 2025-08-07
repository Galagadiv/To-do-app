"use client";

import {FilterType, useTaskFilter} from "@/context/FilterContext";
import {useTasksList} from "@/context/TasksContext";
import {TaskTheme, TaskType} from "@/types/TaskType";
import {useMemo} from "react";

export default function useFilteredTasks(): TaskType[] {
  const {task} = useTasksList();
  const {filter} = useTaskFilter();

  const themeMap: Record<FilterType["theme"], TaskTheme> = {
    ANY: "any",
    PERSONAL: "personal",
    WORK: "work",
    STUDY: "study",
  };

  return useMemo(() => {
    let filtered = task;

    if (filter.theme !== "ANY") {
      const expectedTheme = themeMap[filter.theme];
      filtered = filtered.filter((el) => el.theme === expectedTheme);
    }

    if (filter.status !== "ANY") {
      filtered = filtered.filter(
        (el) =>
          (filter.status === "COMPLETE" && el.completed === true) ||
          (filter.status === "UNCOMPLETE" && el.completed === false)
      );
    }

    return filtered;
  }, [task, filter]);
}
