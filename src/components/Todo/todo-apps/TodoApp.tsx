import FormWrapper from "../FormWrapper";
import TodoListItems from "../ListItems";

function TodoApp() {
  return (
    <div className="h-[80vh]">
      <div className="container flex gap-4">
        <section className="left basis-1/3">
          <FormWrapper />
        </section>
        <section className="right basis-2/3">
          <TodoListItems />
        </section>
      </div>
    </div>
  );
}

export default TodoApp;
