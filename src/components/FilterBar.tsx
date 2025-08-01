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
        className="flex-1 border-r cursor-pointer duration-300 hover:bg-[linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%)]"
        onClick={() => toggleButtons(2)}
      >
        Усі
      </button>
      <button
        type="button"
        className="flex-1 border-r cursor-pointer"
        onClick={() => toggleButtons(1)}
      >
        Не завершені
      </button>
      <button
        type="button"
        className="flex-1 cursor-pointer"
        onClick={() => toggleButtons(0)}
      >
        Завершені
      </button>
    </div>
  );
}
