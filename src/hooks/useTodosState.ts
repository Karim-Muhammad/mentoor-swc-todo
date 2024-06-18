import { useContext } from "react";
import { SwitcherContext } from "../context/SwitcherContext.tsx";
import useRedux from "./useRedux.ts";
import useZustand from "./useZustand.ts";
import useMongez from "./useMongez.ts";

const useTodosState = () => {
  const selectedStateMangament = useContext(SwitcherContext);

  const reduxState = useRedux();
  const zustandState = useZustand();
  const mongezState = useMongez();

  switch (selectedStateMangament.currentApp) {
    case "redux":
      return reduxState;
    case "zustand":
      return zustandState;
    case "mongez":
      return mongezState;
    default:
      return reduxState;
  }
};

export default useTodosState;
