import { Todo } from "../../../types";

export type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <>
      <li className={`py-4`} id={`${todo.id}`}>
        <div className="flex items-center">
          <input
            id={`todo-${todo.id}`}
            name={`todo-${todo.id}`}
            type="checkbox"
            checked={todo.isCompleted}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            onChange={() => {}}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`ml-3 block text-white ${
              todo.isCompleted ? "line-through" : ""
            }`}
          >
            <span className="text-lg font-medium text-white">{todo.title}</span>
          </label>
        </div>
        {/* <p className="text-slate-500 ml-7">{todo.description}</p> */}
      </li>
    </>
  );
}
