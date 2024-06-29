import { useContext, useState } from "react";
import { SwitcherContext } from "../context/SwitcherContext.tsx";
import useRedux from "./useRedux.ts";
import useZustand from "./useZustand.ts";
import useMongez from "./useMongez.ts";
import { Todo } from "../types/index.ts";

type TodoState = {
  todos: Todo[];
  filteredTodos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
  clearTodos: () => void;
  clearCompleted: () => void;
  setFilteredTodos: (todos: Todo[]) => void;
};

const useTodosState = (): TodoState => {
  const selectedStateMangament = useContext(SwitcherContext);

  const reduxState = useRedux();
  const zustandState = useZustand();
  const mongezState = useMongez();

  const stateLib = {
    redux: reduxState,
    zustand: zustandState,
    mongez: mongezState,
  }[selectedStateMangament.currentApp];

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(
    stateLib?.todos ?? []
  );

  console.log("stateLib", stateLib);
  // console.log("filteredTodos", filteredTodos, Math.random());

  return {
    todos: stateLib?.todos!,
    filteredTodos,

    addTodo: stateLib?.addTodo!,
    deleteTodo: stateLib?.deleteTodo!,
    toggleTodo: stateLib?.toggleTodo!,
    updateTodo: stateLib?.updateTodo!,
    clearTodos: stateLib?.clearTodos!,
    clearCompleted: stateLib?.clearCompleted!,
    setFilteredTodos,
  };
};

export default useTodosState;
