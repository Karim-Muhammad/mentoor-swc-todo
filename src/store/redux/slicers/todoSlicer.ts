import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
  {
    id: 3,
    title: "Redux Three",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Redux Four",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Redux Five",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Redux Six",
    isCompleted: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    title: "Redux Seven",
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
      state.map((todo: Todo) => ({
        ...todo,
        isCompleted:
          todo.id === action.payload ? !todo.isCompleted : todo.isCompleted,
        updated_at: new Date().toISOString(),
      }));
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
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todoSlicer.actions;

export default todoSlicer.reducer;
