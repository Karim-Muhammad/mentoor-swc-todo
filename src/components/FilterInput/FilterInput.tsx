import { useEffect, useState } from "react";
// import useTodosState from "../../hooks/useTodosState";

const FilterInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const { setFilteredTodos } = useTodosState();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  console.log("searchTerm", searchTerm);

  useEffect(() => {
    // setFilteredTodos((todos) =>
    //   todos.filter((todo) => todo.title.includes(searchTerm))
    // );
  }, [searchTerm]);

  return (
    <div className="flex justify-between items-center">
      <div>
        <span>Filter:</span>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-1"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <button className="bg-blue-500 text-white px-2 py-1 rounded">
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterInput;
