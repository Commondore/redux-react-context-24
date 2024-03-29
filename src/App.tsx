import { useContext } from "react";
import "./App.css";
import Controls from "./components/Controls";

import Counter from "./components/Counter";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1 onClick={changeTheme} style={{ color: theme === "light" ? "#000" : "#ccc" }}>
        Redux toolkit
      </h1>
      <Counter />
      <Controls />
    </div>
  );
}

export default App;
