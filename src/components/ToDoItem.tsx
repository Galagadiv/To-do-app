import {useTasksList} from "@/context/TasksContext";
import {useEffect, useState} from "react";
import {TaskType} from "./ToDoForm";
import {refreshTasks} from "@/refreshTasks";

export default function ToDoItem({
  completed,
  title,
  id,
}: {
  id: string;
  completed: boolean;
  title: string;
}) {
  const {allTasks, setAllTasks} = useTasksList();
  const [completedState, setCompletedState] = useState<boolean>(completed);

  useEffect(() => {
    const updatedTasks: TaskType[] = allTasks.map((task) =>
      task.id === id ? {...task, completed: completedState} : task
    );

    localStorage.setItem("todos", JSON.stringify(updatedTasks));

    refreshTasks(setAllTasks);
  }, [completedState]);

  const removeTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTasks: TaskType[] = allTasks.filter((el) => el.id !== id);

    localStorage.setItem("todos", JSON.stringify(updatedTasks));

    refreshTasks(setAllTasks);
  };

  return (
    <form
      className="flex gap-[10px] items-center p-[10px]"
      onSubmit={(e) => removeTask(e)}
    >
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={completedState}
          onChange={() => setCompletedState((prev) => !prev)}
          className="w-5 h-5 rounded border border-gray-400 flex items-center justify-center transition"
        />
      </label>
      <h2 className="text-[25px]/[1]">{title}</h2>
      <button
        type="submit"
        className="border rounded w-auto h-full p-[5px] ml-auto"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[20px]"
        >
          <g clipPath="url(#clip0_1545_11122)">
            <path
              d="M1 3.5H13"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 5.5V11"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 5.5V11"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1545_11122">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  );
}
