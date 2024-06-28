import { useContext } from "react";
import { SwitcherContext } from "../../context/SwitcherContext";

interface SwitchButtonProps {
  lib: string;
  color: string;
  switchTo: (lib: string) => void;
}
type ColorType = "purple" | "orange" | "green" | "slate";

function SwitchButton({ lib, switchTo, color }: SwitchButtonProps) {
  const { currentApp } = useContext(SwitcherContext);

  const bgColors: Record<ColorType, string> = {
    purple: "bg-purple-400 hover:bg-purple-700",
    orange: "bg-orange-400 hover:bg-orange-700",
    green: "bg-green-400 hover:bg-green-700",
    slate: "bg-slate-700 hover:bg-slate-600",
  };
  const bgColor: string = bgColors[color as ColorType];

  return (
    <button
      onClick={() => switchTo(lib)}
      className={`border-none ${
        lib === currentApp ? bgColor : bgColors["slate"]
      } text-white font-bold py-2 px-4 rounded`}
    >
      {lib[0].toUpperCase()}
      {lib.slice(1)}
    </button>
  );
}

export default SwitchButton;
