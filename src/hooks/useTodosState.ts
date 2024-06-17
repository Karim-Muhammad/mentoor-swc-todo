import { useContext } from "react";
import { SwitcherContext } from "../context/SwitcherContext.tsx";
import useRedux from "./useRedux.ts";
import useZustand from "./useZustand.ts";

const useTodosState = () => {
  const selectedStateMangament = useContext(SwitcherContext);

  const reduxState = useRedux();
  const zustandState = useZustand();

  switch (selectedStateMangament.currentApp) {
    case "redux":
      return reduxState;
    case "zustand":
      return zustandState;
    default:
      return Error("Unknown state management library selected.");
  }
};

export default useTodosState;
