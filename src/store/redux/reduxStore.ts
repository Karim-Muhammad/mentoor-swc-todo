import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slicers/todoSlicer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

/**
 * what is the purpose of the following code snippet?
 */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * RootState: This is a type that represents the entire state of the Redux store. It is inferred from the return type of the store.getState() method, which is a function that returns the current state of the store.
 * AppDispatch: This is a type that represents the dispatch function of the Redux store. It is inferred from the typeof store.dispatch expression, which is the dispatch function of the store.
 */
