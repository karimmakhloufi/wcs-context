import { useState, createContext } from "react";
import "./App.css";
import Container from "./Container";

export const ThemeContext = createContext(false);

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={isDark}>
      <div className="App">
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Switch on" : "Switch off"}
        </button>
        <h1>App Component</h1>
        <Container />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
