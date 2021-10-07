import React from "react";
import BasicTypewriter from "./examples/BasicTypewriter";
import CustomCursorTypewriter from "./examples/CustomCursorTypewriter";
import CustomTypewriter from "./examples/CustomTypewriter";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <CustomTypewriter />
      </div>
      <div className="typewriter">
        <BasicTypewriter />
      </div>
      <div className="typewriter">
        <CustomCursorTypewriter />
      </div>
    </div>
  );
}

export default App;
