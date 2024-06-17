import create from "zustand";
import { Todo } from "../../types";

interface ZustandStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
}

const useZustandStore = create<ZustandStore>((set, get) => ({
  todos: [
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Learn TypeScript",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Learn Redux",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Learn Zustand",
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id: number) =>
    set((state) => ({
      ...state,
      todos: state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
            updated_at: new Date().toISOString(),
          };
        }

        return todo;
      }),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
  updateTodo: (id: number, updatedTodo: Todo) =>
    set((state) => ({
      todos: state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...updatedTodo,
            updated_at: new Date().toISOString(),
          };
        }

        return todo;
      }),
    })),
  getTodos: () => get().todos,
}));

export default useZustandStore;
