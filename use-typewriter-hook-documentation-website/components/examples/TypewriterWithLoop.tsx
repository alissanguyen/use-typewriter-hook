import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const TypewriterWithLoop: React.FC<Props> = ({}) => {
  
  const targetText =
    "Welcome to React useTypewriter. This is a typewriter with looping effect.";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loopDelay: 500,
    loop: true,
  });
  return (
    <div className="partial-backspace-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName}>{typedText}</div>
      </div>
      <pre className="example-typewriter-code-snippet"></pre>
    </div>
  );
};

export default TypewriterWithLoop;
