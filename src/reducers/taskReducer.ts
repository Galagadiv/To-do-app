import {TaskActionType} from "@/context/TasksContext";
import {TaskType} from "@/types/TaskType";

export function taskReducer(
  state: TaskType[],
  action: TaskActionType
): TaskType[] {
  switch (action.type) {
    case "ADD_DATA":
      return action.data;
    case "ADD_TASK":
      return [...state, action.data];
    case "CHANGE_STATE":
      return state.map((el) =>
        el.id === action.id ? {...el, completed: !el.completed} : el
      );
    case "CHANGE_TASK_THEME":
      return state.map((el) =>
        el.id === action.id ? {...el, theme: action.theme} : el
      );
    case "REMOVE_TASK":
      return state.filter((el) => el.id !== action.id);
    case "CHANGE_TASK_TITLE":
      return state.map((el) =>
        el.id === action.id ? {...el, title: action.title} : el
      );
    default:
      return state;
  }
}
