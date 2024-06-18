import { atom } from "@mongez/react-atom";
import { Todo } from "../../types";

export const todoAtom = atom<Todo[]>({
  key: "todos",
  default: [
    {
      id: 1,
      title: "Learn React [Mongez]",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Learn TypeScript [Mongez]",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
});
