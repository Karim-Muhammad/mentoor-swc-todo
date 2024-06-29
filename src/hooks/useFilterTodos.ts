import { useEffect } from "react";
import { Todo } from "../types";
import useTodosState from "./useTodosState";

const useFilterTodos = (searchTerm: string): Todo[] => {
  // Filter todos based on searchTerm
  const { filteredTodos: todos } = useTodosState();
  let filteredTodos = todos;

  useEffect(() => {
    filteredTodos = todos.filter((todo: Todo) =>
      todo.title.includes(searchTerm)
    );
  }, [searchTerm, todos]);

  return filteredTodos;
};
