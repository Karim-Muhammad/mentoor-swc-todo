import useTodosState from "../../hooks/useTodosState";

const FilterTodos = () => {
  const { filterTodos } = useTodosState();
  const filterHandle = (filter: string) => () => {
    // filterTodos(filter);
  };

  return (
    <div className="mt-7">
      <button onClick={filterHandle("all")} className="btn btn-primary">
        All
      </button>
      <button onClick={filterHandle("active")} className="btn btn-primary">
        Active
      </button>
      <button onClick={filterHandle("completed")} className="btn btn-primary">
        Completed
      </button>
    </div>
  );
};

export default FilterTodos;
