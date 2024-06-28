import { createSlice } from "@reduxjs/toolkit";
import type { Middleware, PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../../types";

const initialState: Todo[] = [
  {
    id: 1,
    title: "Redux One",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Redux Two",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const todoSlicer = createSlice({
  name: "todos",
  initialState: initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push({
        ...action.payload,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        // end_at: action.payload.end_at,
      });
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      state.forEach((todo: Todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      if (index !== -1) state.splice(index, 1); // This mutates the state directly
    },

    updateTodo: (state, action: PayloadAction<{ id: number; todo: Todo }>) => {
      const index = state.findIndex(
        (todo: Todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload.todo,
          updated_at: new Date().toISOString(),
        };
      }
    },

    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.splice(0, state.length, ...action.payload);
    },

    clearTodos: (state) => {
      state.splice(0, state.length);
    },

    filterTodos: (state, action: PayloadAction<string>) => {
      state.filter((todo: Todo) => {
        if (action.payload === "completed") {
          return todo.isCompleted;
        } else if (action.payload === "active") {
          return !todo.isCompleted;
        } else {
          return todo;
        }
      });
    },

    // Extra Reducer
    clearCompleted: (state) => {
      state.filter((todo: Todo) => !todo.isCompleted);
    },
  },
});

// Middlewares - LocalStorage
export const SyncLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("[Sync...] ", store.getState().todos);
  localStorage.setItem("redux", JSON.stringify(store.getState().todos));

  return result;
};

export const { addTodo, toggleTodo, deleteTodo, updateTodo, setTodos } =
  todoSlicer.actions;

export default todoSlicer.reducer;
