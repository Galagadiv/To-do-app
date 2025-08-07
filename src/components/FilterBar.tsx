import {FilterType, useTaskFilter} from "@/context/FilterContext";

export default function FilterBar() {
  const {filter, setFilter} = useTaskFilter();

  const toggleButtons = (value: FilterType["status"]) => {
    setFilter((prev) => ({...prev, status: value}));
  };

  const activeButton = "ring-2 ring-white-500";

  return (
    <div className="flex border rounded">
      <button
        type="button"
        className={`flex-1 border-r p-[0.3rem] cursor-pointer text-[0.8rem] sm:text-[1rem] hover:outline-none hover:ring-2 hover:ring-white-500 ${
          filter.status === "ANY" ? activeButton : ""
        }`}
        onClick={() => toggleButtons("ANY")}
      >
        Усі
      </button>
      <button
        type="button"
        className={`flex-1 border-r p-[0.3rem] cursor-pointer text-[0.8rem] sm:text-[1rem] hover:outline-none hover:ring-2 hover:ring-white-500 ${
          filter.status === "UNCOMPLETE" ? activeButton : ""
        }`}
        onClick={() => toggleButtons("UNCOMPLETE")}
      >
        Не завершені
      </button>
      <button
        type="button"
        className={`flex-1 cursor-pointer p-[0.3rem] text-[0.8rem] sm:text-[1rem] hover:outline-none hover:ring-2 hover:ring-white-500 ${
          filter.status === "COMPLETE" ? activeButton : ""
        }`}
        onClick={() => toggleButtons("COMPLETE")}
      >
        Завершені
      </button>
    </div>
  );
}
