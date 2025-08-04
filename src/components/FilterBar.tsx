import {useTasksList} from "@/context/TasksContext";

export default function FilterBar() {
  const {setFilter} = useTasksList();

  const toggleButtons = (value: number) => {
    setFilter(value);
  };

  return (
    <div className="flex p-[5px] border rounded">
      <button
        type="button"
        className="flex-1 border-r cursor-pointer text-[0.8rem] sm:text-[1rem]"
        onClick={() => toggleButtons(2)}
      >
        Усі
      </button>
      <button
        type="button"
        className="flex-1 border-r cursor-pointer text-[0.8rem] sm:text-[1rem]"
        onClick={() => toggleButtons(1)}
      >
        Не завершені
      </button>
      <button
        type="button"
        className="flex-1 cursor-pointer text-[0.8rem] sm:text-[1rem]"
        onClick={() => toggleButtons(0)}
      >
        Завершені
      </button>
    </div>
  );
}
