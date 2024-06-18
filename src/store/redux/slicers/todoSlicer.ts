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
      state.filter((todo: Todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action: PayloadAction<{ id: number; todo: Todo }>) => {
      state.map((todo: Todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload.todo,
            updated_at: new Date().toISOString(),
          };
        }
        return todo;
      });
    },

    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.splice(0, state.length, ...action.payload);
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
