import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

const CustomCursorTypewriter: React.FC = ({}) => {
  const targetText =
    "Welcome to React useTypewriter. This is a typewriter with custom cursor (color).";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });
  return (
    //   Have to compose classNames to get all the css rules
    <div className={`${wrapperClassName} `} id="custom-cursor-typewriter">
      {typedText}
    </div>
  );
};

export default CustomCursorTypewriter;
