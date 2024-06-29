import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo as addTodoAction,
  deleteTodo as deleteTodoAction,
  updateTodo as updateTodoAction,
  toggleTodo as toggleTodoAction,
  setTodos,
  clearTodos as clearTodosAction,
  clearCompleted as clearCompletedAction,
} from "../store/redux/slicers/todoSlicer";

import { Todo } from "../types";
import { AppDispatch, RootState } from "../store/redux/reduxStore";

interface ReduxState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  clearTodos: () => void;
  clearCompleted: () => void;
}

const useRedux = (): ReduxState => {
  const todos = useSelector((state: RootState) => state.todos as Todo[]);
  const dispatch = useDispatch<AppDispatch>();

  /**
   * @description Add a new todo
   * @param todo
   * @returns
   */
  const addTodo = (todo: Todo) => dispatch(addTodoAction(todo));

  /**
   * @description Update a todo
   * @param id
   * @param todo
   * @returns
   */
  const updateTodo = (id: number, todo: Todo) =>
    dispatch(updateTodoAction({ id, todo }));

  /**
   * @description Delete a todo
   */
  const deleteTodo = (id: number) => dispatch(deleteTodoAction(id));

  /**
   * @description Toggle a todo
   * @param id
   * @returns
   */
  const toggleTodo = (id: number) => dispatch(toggleTodoAction(+id));

  /**
   * @description Clear all todos
   * @returns
   */
  const clearTodos = () => dispatch(clearTodosAction());

  /**
   * @description Clear all completed todos
   * @returns
   */
  const clearCompleted = () => dispatch(clearCompletedAction());

  /**
   * Load todos from localStorage
   * when the component mounts
   */
  useEffect(() => {
    console.log("[useEffect in useRedux] ", todos);

    if (!localStorage.getItem("redux")) return;

    const storedData = JSON.parse(localStorage.getItem("redux") as string);

    if (Array.isArray(storedData)) {
      dispatch(setTodos(storedData as Todo[]));
    }
  }, []);

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    clearCompleted,
  };
};

export default useRedux;
