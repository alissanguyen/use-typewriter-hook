import React from "react";
import BasicTypewriter from "./examples/BasicTypewriter";
import CustomCursorTypewriter from "./examples/CustomCursorTypewriter";
import CustomTypewriter from "./examples/CustomTypewriter";
import "./app.css";
import TypewriterWithLoop from "./examples/TypewriterWithLoop";
import PartialBackspaceTypewriter from "./examples/PartialBackspaceTypewriter";
import "./blink-cursor-demo.css";
function App() {
  return (
    <div className="App">
      <div className="typewriter typewriter-1">
        <PartialBackspaceTypewriter />
      </div>
      <div className="typewriter typewriter-2">
        <BasicTypewriter />
      </div>
      <div className="typewriter typewriter-3">
        <CustomCursorTypewriter />
      </div>
      <div className="typewriter typewriter-4">
        <CustomTypewriter />
      </div>
      <div className="typewriter typewriter-5">
        <TypewriterWithLoop />
      </div>
    </div>
  );
}

export default App;
