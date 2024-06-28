// import type { EmojiStyle } from "emoji-picker-react";

export interface Todo {
  id: number;
  // avatar: EmojiStyle;

  title: string;
  // description: string;

  isCompleted: boolean;
  // parent: number;

  created_at: string;
  updated_at: string;
  // end_at: string;

  // owner: string;
  // assignee: string;
}

export interface TodoActions {
  addTodo: (todo: Todo) => void;

  toggleTodo: (id: number) => void;

  deleteTodo: (id: number) => void;

  updateTodo: (id: number, todo: Todo) => void;

  setTodos?: (todos: Todo[]) => void;

  // ========================
  clearTodos: () => void;

  filterTodos: (filter: string) => void;

  clearCompleted: () => void;
}
