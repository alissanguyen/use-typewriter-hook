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
    <div className="custom-cursor-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={`${wrapperClassName} `} id="custom-cursor-typewriter">
          {typedText}
        </div>
      </div>
      <pre className="example-typewriter-code-snippet"></pre>
    </div>
  );
};

export default CustomCursorTypewriter;
