import {FilterType, useTaskFilter} from "@/context/FilterContext";

export default function NavBar() {
  const {filter, setFilter} = useTaskFilter();

  const setTaskFilter = (val: FilterType["theme"]) => {
    setFilter((prev) => ({...prev, theme: val}));
  };

  const activeButton = "ring-2 ring-white-500";

  return (
    <header>
      <ul className="flex border rounded-b border-t-[0]">
        <li className="flex flex-1 border-r ">
          <button
            onClick={() => setTaskFilter("ANY")}
            className={`flex flex-1 p-[0.625rem] cursor-pointer hover:outline-none hover:ring-2 hover:ring-white-500 ${
              filter.theme === "ANY" ? activeButton : ""
            }`}
          >
            <span className="text-[1rem]/[1] mx-auto">Усі</span>
          </button>
        </li>
        <li className="flex flex-1 border-r">
          <button
            onClick={() => setTaskFilter("PERSONAL")}
            className={`flex flex-1 p-[0.625rem] cursor-pointer hover:outline-none hover:ring-2 hover:ring-white-500 ${
              filter.theme === "PERSONAL" ? activeButton : ""
            }`}
          >
            <span className="text-[1rem]/[1] mx-auto">Особисте</span>
          </button>
        </li>
        <li className="flex flex-1 border-r">
          <button
            onClick={() => setTaskFilter("WORK")}
            className={`flex flex-1 p-[0.625rem] cursor-pointer hover:outline-none hover:ring-2 hover:ring-white-500 ${
              filter.theme === "WORK" ? activeButton : ""
            }`}
          >
            <span className="text-[1rem]/[1] mx-auto">Робота</span>
          </button>
        </li>
        <li className="flex flex-1">
          <button
            onClick={() => setTaskFilter("STUDY")}
            className={`flex flex-1 p-[0.625rem] cursor-pointer hover:outline-none hover:ring-2 hover:ring-white-500 ${
              filter.theme === "STUDY" ? activeButton : ""
            }`}
          >
            <span className="text-[1rem]/[1] mx-auto">Навчання</span>
          </button>
        </li>
      </ul>
    </header>
  );
}
