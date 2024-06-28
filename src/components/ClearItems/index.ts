import React from "react";
import useTodosState from "../../hooks/useTodosState";

type ClearItemsProps = {
  clearItems: () => void;
};

export default function ClearItems(props: ClearItemsProps) {
  const {} = useTodosState();
  return (
    <div className="flex justify-center my-5">
      <button
        className="btn btn-danger"
        onClick={() => console.log("clear items")}
      >
        Clear Items
      </button>
    </div>
  );
}
