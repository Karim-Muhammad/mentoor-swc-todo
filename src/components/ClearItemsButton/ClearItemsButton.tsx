import { trans } from "@mongez/localization";
import useTodosState from "../../hooks/useTodosState";
import { FaTrashAlt } from "react-icons/fa";

function ClearItems(): JSX.Element {
  const { clearTodos } = useTodosState();

  return (
    <div
      className="cursor-pointer relative max-w-7xl mx-auto"
      onClick={clearTodos}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] rounded-lg blur opacity-85"></div>

      <div className="relative p-4 my-4 bg-[#ff6a5be1] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-between space-x-6">
        <div className="w-full flex justify-between items-center gap-1">
          <span className="text-white-900">{trans("clearAllTodos")}</span>

          <FaTrashAlt className="text-white-900" />
        </div>
      </div>
    </div>
  );
}

export default ClearItems;
