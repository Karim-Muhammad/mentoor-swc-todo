import React from "react";

import { FaCheckDouble, FaPen, FaX } from "react-icons/fa6";

import useTodosState from "../../../hooks/useTodosState";
import { Todo } from "../../../types";

export type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [title, setTitle] = React.useState(todo.title);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { toggleTodo, updateTodo, deleteTodo } = useTodosState();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      updateTodo(todo.id, { ...todo, title });
    }
  };

  const handleDelete = (id: number) => () => {
    deleteTodo(id);
  };

  return (
    <>
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#3fb7b3] to-[#16D6FA] rounded-lg blur opacity-85"></div>

        <div className="relative p-4 my-4 bg-[#5cdff6e1] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-between space-x-6">
          <div className="flex items-center gap-1">
            <FaCheckDouble
              color={todo.isCompleted ? "black" : "#DD5746"}
              onClick={toggleTodo.bind(null, todo.id)}
              className="hover:scale-150 transition-all cursor-pointer"
            />
            {isEdit && (
              <input
                type="text"
                value={title}
                onChange={changeTitle}
                onBlur={setIsEdit.bind(null, false)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-b border-gray-800 focus:outline-none text-slate-700"
                ref={inputRef}
              />
            )}
            {!isEdit && (
              <p
                className="text-slate-800"
                onDoubleClick={() => {
                  setIsEdit(true);
                  setTimeout(() => {
                    inputRef.current?.focus();
                  }, 0);
                }}
              >
                {todo.title}
              </p>
            )}
          </div>

          <div className="group-[actions] flex gap-2">
            {/* Update */}
            <FaPen
              onClick={setIsEdit.bind(null, !isEdit)}
              className="text-[#0765d1fe] hover:text-[#0787d1fe] hover:scale-150 transition-all cursor-pointer"
            />
            {/* Delete */}
            <FaX
              className="text-[#e36fa7] hover:text-[#e16170] hover:scale-150 transition-all cursor-pointer"
              onClick={handleDelete(todo.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
