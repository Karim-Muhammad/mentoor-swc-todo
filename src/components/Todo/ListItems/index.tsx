import useTodosState from "../../../hooks/useTodosState";
import TodoItem from "../Item";
import { Todo } from "../../../types";

export default function TodoListItems() {
  // I want get todos from the state managment based on the switcher what is
  const { todos } = useTodosState();

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}
