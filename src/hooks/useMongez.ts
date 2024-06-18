import { useEffect } from "react";
import { todoAtom } from "../store/mongez/mongezStore";
import { Todo } from "../types";

const useMongez = () => {
  const [todos, setTodos] = todoAtom.useState();
  todoAtom.onChange((newValue) => {
    localStorage.setItem("mongez", JSON.stringify(newValue));
  });

  const addTodo = (todo: Todo) => {
    // setTodos((prev: Todo[]): Todo[] => [...prev, todo]);
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

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

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
  };

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

  // useEffect(() => {
  //   // localStorage.setItem("mongez", JSON.stringify(todos));
  //   localStorage.setItem("mongez", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    if (!localStorage.getItem("mongez")) return;
    const storedData = JSON.parse(localStorage.getItem("mongez") as string);
    if (Array.isArray(storedData)) {
      setTodos(storedData as Todo[]);
    }
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
};

export default useMongez;
