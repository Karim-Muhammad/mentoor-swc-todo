import FormWrapper from "../Todo/FormWrapper";
import TodoListItems from "../Todo/ListItems";

function TodoApp() {
  return (
    <div className="h-[80vh]">
      <div className="container flex-col sm:flex gap-4">
        <section className="left">
          <FormWrapper />
        </section>
        <section className="right">
          <TodoListItems />
        </section>
      </div>
    </div>
  );
}

export default TodoApp;
