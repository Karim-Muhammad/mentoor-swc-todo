import { useEffect, useState } from "react";
import "./App.css";
import TodoListForm from "./components/TodoListForm";
import { Todo } from "./utils";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addListItem = (item: Todo) => {
    // Get item from input
    const newItem = item;
    const initialItems = localStorage.getItem("todos") || "[]";
    const oldItems = JSON.parse(initialItems);
    oldItems.push(newItem);

    // Save to LocalStorage
    localStorage.setItem("todos", JSON.stringify(oldItems));

    // Update state
    setTodos(oldItems);
  };

  useEffect(() => {
    // Get Todos from LocalStorage first
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  return (
    <>
      <TodoListForm onAddItem={addListItem} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
