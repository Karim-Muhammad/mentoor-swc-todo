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
    /**
     * @description Add a single todo
     * @param state {Todo[]}
     * @param action {PayloadAction<Todo>}
     */
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push({
        ...action.payload,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        // end_at: action.payload.end_at,
      });
    },

    /**
     * @description Change complete status of a single todo by id
     * @param state {Todo[]}
     * @param action {PayloadAction<number>} - id
     */
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.forEach((todo: Todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },

    /**
     * @description Delete a single todo
     * @param state {Todo[]}
     * @param action {PayloadAction<number>}
     */
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo: Todo) => todo.id === action.payload);
      if (index !== -1) state.splice(index, 1); // This mutates the state directly
    },

    /**
     *
     * @param state {Todo[]}
     * @param action {PayloadAction<{ id: number; todo: Todo }>}
     */
    updateTodo: (state, action: PayloadAction<{ id: number; todo: Todo }>) => {
      let item = state.find((todo: Todo) => todo.id === action.payload.id);

      if (item !== null) {
        item = {
          ...item,
          ...action.payload.todo,
          updated_at: new Date().toISOString(),
        };
      }
    },

    /**
     * @description Set all todos
     * @param state {Todo[]}
     * @param action {PayloadAction<Todo[]>}
     * @returns {Todo[]} action.payload
     */
    setTodos: (_, action: PayloadAction<Todo[]>) => {
      // state.splice(0, state.length, ...action.payload); works
      return action.payload;
    },

    /**
     * @description Clear all todos
     * @returns {Todo[]} Empty array
     */
    clearTodos: () => {
      // state.splice(0, state.length);
      return [];
    },

    /**
     * @description Clear all completed todos
     * @param state
     */
    clearCompleted: (state) => {
      return state.filter((todo: Todo) => !todo.isCompleted);
    },
  },
});

// Middlewares - LocalStorage
export const SyncLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  console.log("[Redux Sync to LoaclStorage...] ", store.getState().todos);

  localStorage.setItem("redux", JSON.stringify(store.getState().todos));

  return result;
};

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  setTodos,
  clearTodos,
  clearCompleted,
} = todoSlicer.actions;

export default todoSlicer.reducer;
