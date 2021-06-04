import { useContext } from "react";
import { ThemeContext } from "./App";

function Text() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>I'm the text</p>
      <p>{theme.isDark ? "Dark" : "Light"}</p>
      <button
        onClick={() => {
          theme.setIsDark(!theme.isDark);
        }}
      >
        {theme.isDark ? "On" : "Off"}
      </button>
    </div>
  );
}

export default Text;
