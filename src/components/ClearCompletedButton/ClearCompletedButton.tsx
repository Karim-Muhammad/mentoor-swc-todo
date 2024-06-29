import { FaArrowCircleUp } from "react-icons/fa";
import useTodosState from "../../hooks/useTodosState";

const ClearCompletedButton = () => {
  const { clearCompleted } = useTodosState();
  return (
    <div
      className="cursor-pointer relative max-w-7xl mx-auto"
      onClick={clearCompleted}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#4A90E2] to-[#6A92E3] rounded-lg blur opacity-85"></div>

      <div className="relative p-4 my-4 bg-[#4A90E2e1] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-between space-x-6">
        <div className="w-full flex justify-between items-center gap-1">
          <span className="text-white-900">Clear Completed Todos</span>

          <FaArrowCircleUp className="text-white-900" />
        </div>
      </div>
    </div>
  );
};

export default ClearCompletedButton;
