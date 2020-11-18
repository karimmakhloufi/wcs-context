import { useState } from "react";
import "./App.css";
import Container from "./Container";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Switch on" : "Switch off"}
      </button>
      <h1>App Component</h1>
      <Container theme={isDark} />
    </div>
  );
}

export default App;
