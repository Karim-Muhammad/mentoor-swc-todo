import { Provider } from "react-redux";

import { store } from "./store/redux/reduxStore.ts";
import AppHeader from "./components/App/Header/index.tsx";
import AppFooter from "./components/App/Footer/index.tsx";
import TodoApp from "./components/todo-apps/TodoApp.tsx";
import Switcher from "./components/Switcher/index.tsx";
import SwitcherProvider from "./context/SwitcherContext.tsx";

// import "./App.css";

function App() {
  return (
    <div className="container mx-auto my-5">
      <AppHeader />
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
