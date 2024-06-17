import { useContext } from "react";

import SwitchButton from "../SwitchButton";
import { SwitcherContext } from "../../context/SwitcherContext";

function Switcher(): JSX.Element {
  const { switchTo } = useContext(SwitcherContext);
  return (
    <div className="flex items-center justify-evenly">
      <SwitchButton lib="redux" color="purple" switchTo={switchTo} />
      <SwitchButton lib="zustand" color="orange" switchTo={switchTo} />
      <SwitchButton lib="mongez" color="green" switchTo={switchTo} />
    </div>
  );
}

export default Switcher;
