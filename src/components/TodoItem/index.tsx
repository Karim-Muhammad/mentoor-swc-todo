import { Todo } from "../../utils";

export type TodoItemProps = {
  // props go here
  todo: Todo;
  setTodos: (parameter: Todo[] | ((value: Todo[]) => Todo[])) => void;
};

export default function TodoItem({ todo, setTodos }: TodoItemProps) {
  return (
    <>
      <li className={`py-4`} id={`${todo.id}`}>
        <div className="flex items-center">
          <input
            id={`todo-${todo.id}`}
            name={`todo-${todo.id}`}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() =>
              setTodos((prev) => {
                return prev.map((item: Todo) => {
                  console.log(item, todo);
                  if (item.id === todo.id) {
                    return { ...item, isCompleted: !item.isCompleted };
                  }
                  return item;
                });
              })
            }
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`ml-3 block text-white ${
              todo.isCompleted ? "line-through" : ""
            }`}
          >
            <span className="text-lg font-medium text-white">{todo.text}</span>
          </label>
        </div>
      </li>
    </>
  );
}
