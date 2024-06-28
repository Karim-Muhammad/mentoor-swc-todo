import { useState } from "react";
import useTodosState from "../../../hooks/useTodosState";
import { Todo } from "../../../types";
import { trans } from "@mongez/localization";

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

    if (!todo.title.trim()) return;

    addTodo({
      ...todo,
      id: Math.floor(Math.random() * 1000),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="py-3 w-full mx-auto">
      <div className="flex items-center border-b-2 border-[#16D6FA] py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="title"
          placeholder={trans("addTodoPlaceholder")}
          onChange={handleChange}
        />
        <button
          className="flex-shrink-0 bg-[#16d8fade] hover:bg-[#16D6FA] text-sm border-4 text-white py-1 rounded border-none"
          type="submit"
        >
          {trans("addTodo")}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
