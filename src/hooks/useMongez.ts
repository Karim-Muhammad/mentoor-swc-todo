import { useEffect } from "react";
import { todoAtom } from "../store/mongez/mongezStore";
import { Todo } from "../types";

const useMongez = () => {
  const [todos, setTodos] = todoAtom.useState();

  todoAtom.onChange((newValue) => {
    localStorage.setItem("mongez", JSON.stringify(newValue));
  });

  /**
   * @description Add a new todo
   * @param todo
   */
  const addTodo = (todo: Todo) => {
    // setTodos((prev: Todo[]): Todo[] => [...prev, todo]);
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  /**
   * @description Toggle a todo (mark as completed or not) by `id`
   */
  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo: Todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    );

    setTodos(newTodos);
  };

  /**
   * @description Delete a todo by `id`
   * @param id
   */
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
  };

  /**
   * @description Update a todo by `id`
   * @param id
   * @param updatedTodo
   */
  const updateTodo = (id: number, updatedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...updatedTodo,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  /**
   * @description Clear all todos.
   */
  const clearTodos = () => {
    setTodos([]);
  };

  /**
   * @description Clear all completed todos.
   */
  const clearCompleted = () => {
    const newTodos = todos.filter((todo: Todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  useEffect(() => {
    if (!localStorage.getItem("mongez")) return;
    const storedData = JSON.parse(localStorage.getItem("mongez") as string);
    if (Array.isArray(storedData)) {
      setTodos(storedData as Todo[]);
    }
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearTodos,
    clearCompleted,
  };
};

export default useMongez;
