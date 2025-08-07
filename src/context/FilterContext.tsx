"use client";

import React, {createContext, useContext, useState} from "react";

type FilterContextType = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

export type FilterType = {
  theme: "ANY" | "PERSONAL" | "WORK" | "STUDY";
  status: "ANY" | "UNCOMPLETE" | "COMPLETE";
};

const TaskFilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export function FilterProvider({children}: {children: React.ReactNode}) {
  const [filter, setFilter] = useState<FilterType>({
    theme: "ANY",
    status: "ANY",
  });

  return (
    <TaskFilterContext.Provider value={{filter, setFilter}}>
      {children}
    </TaskFilterContext.Provider>
  );
}

export const useTaskFilter = () => {
  const context = useContext(TaskFilterContext);
  if (!context) {
    throw new Error("useTaskFilter access error");
  }
  return context;
};
