import { useState } from "react";
import { Provider } from "react-redux";
import {
  getCurrentLocaleCode,
  setCurrentLocaleCode,
} from "@mongez/localization";

import "./config/localization.ts";
import { store } from "./store/redux/reduxStore.ts";
import AppHeader from "./components/App/Header/index.tsx";
import AppFooter from "./components/App/Footer/index.tsx";
import TodoApp from "./components/Todo/index.tsx";
import Switcher from "./components/Switcher/index.tsx";
import SwitcherProvider from "./context/SwitcherContext.tsx";

// import "./App.css";

function App() {
  const [language, setLanguage] = useState<string>(getCurrentLocaleCode());
  const direction = language === "ar" ? "rtl" : "ltr";

  setCurrentLocaleCode(language);

  return (
    <div dir={direction} className="container mx-auto my-5">
      <AppHeader language={language} changeLanguage={setLanguage} />
      <SwitcherProvider>
        <Switcher />
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </SwitcherProvider>
      <AppFooter />
    </div>
  );
}

export default App;
