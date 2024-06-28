import { useContext } from "react";

import SwitchButton from "../SwitchButton";
import { SwitcherContext } from "../../context/SwitcherContext";
import { trans } from "@mongez/localization";

function Switcher(): JSX.Element {
  const { switchTo } = useContext(SwitcherContext);
  return (
    <div className="flex items-center">
      <SwitchButton lib={trans("redux")} color="purple" switchTo={switchTo} />
      <SwitchButton lib={trans("zustand")} color="orange" switchTo={switchTo} />
      <SwitchButton lib={trans("mongez")} color="green" switchTo={switchTo} />
    </div>
  );
}

export default Switcher;
