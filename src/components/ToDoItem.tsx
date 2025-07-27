import {useTasksList} from "@/context/TasksContext";
import {useEffect, useState} from "react";
import {TaskType} from "./ToDoForm";

export default function ToDoItem({
  completed,
  title,
  id,
}: {
  id: string;
  completed: boolean;
  title: string;
}) {
  const {tasksList, setTasksList} = useTasksList();
  const [completedState, setComplitedState] = useState<boolean>(completed);

  useEffect(() => {
    if (!tasksList) return;

    const updatedTasks: TaskType[] = tasksList.map((task) =>
      task.id === id ? {...task, complited: completedState} : task
    );

    setTasksList(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  }, [completedState]);

  return (
    <form className="flex gap-[10px] items-center p-[10px]">
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => setComplitedState((prev) => !prev)}
          className="w-5 h-5 rounded border border-gray-400 flex items-center justify-center transition"
        />
      </label>
      <h2 className="text-[25px]/[1]">{title}</h2>
    </form>
  );
}
