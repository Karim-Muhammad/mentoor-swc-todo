import FormWrapper from "../FormWrapper";
import TodoListItems from "../ListItems";

function TodoApp() {
  return (
    <div className="h-[80vh]">
      <div className="container flex gap-4">
        <section className="left basis-full">
          <FormWrapper />
        </section>
        <section className="right basis-full">
          <TodoListItems />
        </section>
      </div>
    </div>
  );
}

export default TodoApp;
