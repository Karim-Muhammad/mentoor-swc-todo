import { createContext, useState } from "react";

interface SwitcherContextType {
  currentApp: string;
  switchTo: (lib: string) => void;
}

export const SwitcherContext = createContext<SwitcherContextType>({
  currentApp: "redux",
  switchTo: () => {},
});

const SwitcherProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentApp, setCurrentApp] = useState<string>("redux");
  const switchTo = (lib: string) => setCurrentApp(lib);

  const value = { currentApp, switchTo };

  return (
    <SwitcherContext.Provider value={value}>
      {children}
    </SwitcherContext.Provider>
  );
};

export default SwitcherProvider;
