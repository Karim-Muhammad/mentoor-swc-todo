import { Todo } from "../../utils";
import TodoItem from "../TodoItem";

type CallbackType = (value: Todo[]) => Todo[];

export type TodoListProps = {
  // props go here
  todos: Todo[];
  setTodos: (parameter: Todo[] | CallbackType) => Todo[];
};

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <>
      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </>
  );
}
