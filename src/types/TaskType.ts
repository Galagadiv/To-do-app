export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  theme: TaskTheme;
};

export type TaskTheme = "any" | "personal" | "work" | "study";
