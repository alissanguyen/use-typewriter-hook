import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import CodeSnippet from "../CodeSnippet";

const TypewriterWithLoop: React.FC = () => {
  enum CODE {
    CSS = `.use-typewriter-cursor:after {
  content: "";
  border-right: 2px solid currentColor;
  animation: blink 0.45s normal 0s infinite;
  animation-direction: alternate;
}
    
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
    TSX = `import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
    
const TypewriterWithLoop: React.FC = () => {
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
    </div>
  );
};

export default TypewriterWithLoop;`,
  }
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
      <CodeSnippet Code={CODE.TSX} CSS={CODE.CSS} />
    </div>
  );
};

export default TypewriterWithLoop;
