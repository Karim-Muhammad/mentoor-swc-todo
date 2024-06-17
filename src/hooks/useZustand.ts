import useZustandStore, { ZustandStore } from "../store/zustand/zustandStore";

const useZustand = (): ZustandStore => {
  const zustandStore = useZustandStore();
  return {
    todos: zustandStore.todos,
    addTodo: zustandStore.addTodo,
    updateTodo: zustandStore.updateTodo,
    deleteTodo: zustandStore.deleteTodo,
    toggleTodo: zustandStore.toggleTodo,
  };
};

export default useZustand;
