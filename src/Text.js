import { useContext } from "react";
import { ThemeContext } from "./App";

function Text() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>I'm the text</p>
      <p>{theme ? "Dark" : "Light"}</p>
    </div>
  );
}

export default Text;
