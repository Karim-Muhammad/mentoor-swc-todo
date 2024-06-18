import { useState } from "react";
import useTodosState from "../../../hooks/useTodosState";
import { Todo } from "../../../types";

function TodoForm() {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    isCompleted: false,
    created_at: "",
    updated_at: "",
  });

  const { addTodo } = useTodosState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev: Todo) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="title"
          placeholder="Add a task"
          onChange={handleChange}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
