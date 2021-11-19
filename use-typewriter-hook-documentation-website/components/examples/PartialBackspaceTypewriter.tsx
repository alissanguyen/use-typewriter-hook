import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import CodeSnippet from "../CodeSnippet";

const PartialBackspaceTypewriter: React.FC = () => {
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
    
const PartialBackspaceTypewriter: React.FC = () => {
  const targetText = [
    "Welcome to React useTypewriter, this is a typewriter with backspacing effect!",
    "Hi, I'm Alissa. I'm a programmer.",
    "Hi, I'm Alissa. I'm an artist.",
    "Hi, I'm Alissa. I'm an anime lover.",
  ];
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loop: false,
  });
  return (
    <div className="partial-backspace-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName}>{typedText}</div>
      </div>
    </div>
  );
};

export default PartialBackspaceTypewriter;`,
  }
  const targetText = [
    "Welcome to React useTypewriter, this is a typewriter with backspacing effect!",
    "Hi, I'm Alissa. I'm a programmer.",
    "Hi, I'm Alissa. I'm an artist.",
    "Hi, I'm Alissa. I'm an anime lover.",
  ];
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loop: false,
  });
  return (
    <div className="partial-backspace-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName}>{typedText}</div>
      </div>
      <CodeSnippet CSS={CODE.CSS} Code={CODE.TSX} />
    </div>
  );
};

export default PartialBackspaceTypewriter;
