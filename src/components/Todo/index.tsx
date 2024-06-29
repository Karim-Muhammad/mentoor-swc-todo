import ClearCompletedButton from "../ClearCompletedButton";
import ClearItemsButton from "../ClearItemsButton";
import FilterTodos from "../FilterTodos";
import FormWrapper from "../Todo/FormWrapper";
import TodoListItems from "../Todo/ListItems";

function TodoApp() {
  return (
    <div className="h-[80vh]">
      <div className="container flex flex-col md:flex-row gap-4">
        <section className="basis-6/12 xl:basis-4/12">
          <FormWrapper />
          <ClearItemsButton />
          <ClearCompletedButton />
        </section>
        <section className="basis-8/12">
          <FilterTodos />
          <TodoListItems />
        </section>
      </div>
    </div>
  );
}

export default TodoApp;
