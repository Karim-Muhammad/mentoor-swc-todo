import { useContext } from "react";
import { SwitcherContext } from "../../../context/SwitcherContext";
// import { useState } from "react";
// import { Todo } from "../../types";

import TodoHeader from "../Header";
import TodoForm from "../Form";

export default function FormWrapper() {
  const selectedStateMangament = useContext(SwitcherContext);

  console.log("selectedStateMangament", selectedStateMangament);

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <TodoHeader />
        <TodoForm />
      </div>
    </>
  );
}
