import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css"


const CustomCursorTypewriter: React.FC = ({}) => {
  const targetText =
    "Welcome to React Typewriter. This is a typewriter with custom cursor (color).";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 50,
  });
  return (
    //   Have to compose classNames to get all the css rules
    <div className={`${wrapperClassName} custom-cursor-typewriter`} id="custom-cursor-typewriter">
      {typedText}
    </div>
  );
};

export default CustomCursorTypewriter;
