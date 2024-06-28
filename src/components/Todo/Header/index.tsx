import { useContext } from "react";
import noteImage from "../../../assets/note.png";
import { SwitcherContext } from "../../../context/SwitcherContext";
import { trans } from "@mongez/localization";

function TodoHeader() {
  const { currentApp } = useContext(SwitcherContext);
  return (
    <div className="">
      <h1 className="flex items-center justify-between text-center text-white-800 font-bold text-4xl uppercase">
        <div>
          {trans("headerForm")}
          <span className="mx-1 text-sm text-slate-600">
            ({trans(currentApp.toLowerCase())})
          </span>
        </div>

        <img src={noteImage} width={"50px"} height={"50px"} />
      </h1>
    </div>
  );
}

export default TodoHeader;
