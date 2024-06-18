import { useEffect } from "react";
import useZustandStore, { ZustandStore } from "../store/zustand/zustandStore";

const useZustand = (): ZustandStore => {
  const zustandStore = useZustandStore();
  const todos = zustandStore.todos;
  const setTodos = zustandStore.setTodos;

  useEffect(() => {
    if (!localStorage.getItem("zustand")) return;
    const storedData = JSON.parse(localStorage.getItem("zustand") as string);
    if (Array.isArray(storedData)) {
      setTodos(storedData);
    }
  }, []);

  return {
    todos: todos,
    addTodo: zustandStore.addTodo,
    updateTodo: zustandStore.updateTodo,
    deleteTodo: zustandStore.deleteTodo,
    toggleTodo: zustandStore.toggleTodo,
    setTodos: setTodos,
  };
};

export default useZustand;
