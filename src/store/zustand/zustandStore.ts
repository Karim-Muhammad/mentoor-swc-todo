import create from "zustand";
import { Todo } from "../../types";

export interface ZustandStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
  setTodos: (todos: Todo[]) => void;
  clearTodos: () => void;
  clearCompleted: () => void;
}

const useZustandStore = create<ZustandStore>((set, get) => ({
  todos: [
    {
      id: 1,
      title: "Learn TypeScript",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Learn Zustand",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  addTodo: (todo: Todo) =>
    set((state) => {
      const newState = [...state.todos, todo];
      localStorage.setItem("zustand", JSON.stringify(newState));
      return {
        ...state,
        todos: newState,
      };
    }),
  toggleTodo: (id: number) =>
    set((state) => {
      const newState = state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
            updated_at: new Date().toISOString(),
          };
        }

        return todo;
      });

      localStorage.setItem("zustand", JSON.stringify(newState));

      return {
        ...state,
        todos: newState,
      };
    }),
  deleteTodo: (id: number) =>
    set((state) => {
      const newState = state.todos.filter((todo: Todo) => todo.id !== id);

      localStorage.setItem("zustand", JSON.stringify(newState));

      return {
        ...state,
        todos: newState,
      };
    }),
  updateTodo: (id: number, updatedTodo: Todo) =>
    set((state) => {
      const newState = state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...updatedTodo,
            updated_at: new Date().toISOString(),
          };
        }

        return todo;
      });

      localStorage.setItem("zustand", JSON.stringify(newState));

      return {
        ...state,
        todos: newState,
      };
    }),
  getTodos: () => get().todos,
  setTodos: (todos: Todo[]) =>
    set((state) => {
      localStorage.setItem("zustand", JSON.stringify(todos));
      return { ...state, todos: todos };
    }),
  clearTodos: () => set((state) => ({ ...state, todos: [] })),
  clearCompleted: () =>
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo: Todo) => !todo.isCompleted),
    })),
}));

export default useZustandStore;
