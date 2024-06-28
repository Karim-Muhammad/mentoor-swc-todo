import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoAction,
  deleteTodo as deleteTodoAction,
  updateTodo as updateTodoAction,
  toggleTodo as toggleTodoAction,
  setTodos,
} from "../store/redux/slicers/todoSlicer";

import { Todo } from "../types";
import { AppDispatch, RootState } from "../store/redux/reduxStore";

interface ReduxState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const useRedux = (): ReduxState => {
  const todos = useSelector((state: RootState) => state.todos as Todo[]);
  const dispatch = useDispatch<AppDispatch>();

  const addTodo = (todo: Todo) => dispatch(addTodoAction(todo));
  const updateTodo = (id: number, todo: Todo) =>
    dispatch(updateTodoAction({ id, todo }));
  const deleteTodo = (id: number) => dispatch(deleteTodoAction(id));
  const toggleTodo = (id: number) => dispatch(toggleTodoAction(+id));

  useEffect(() => {
    if (!localStorage.getItem("redux")) return;
    const storedData = JSON.parse(localStorage.getItem("redux") as string);
    if (Array.isArray(storedData)) {
      dispatch(setTodos(storedData as Todo[]));
    }

    console.log("[useEffect in useRedux] ", storedData);
  }, []);

  return { todos, addTodo, updateTodo, deleteTodo, toggleTodo };
};

export default useRedux;
