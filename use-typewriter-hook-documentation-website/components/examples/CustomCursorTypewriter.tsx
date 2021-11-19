import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import CodeSnippet from "../CodeSnippet";

const CustomCursorTypewriter: React.FC = ({}) => {
  enum CODE {
    CSS = `.use-typewriter-cursor:after {
      content: "";
      border-right: 2px solid currentColor;
      animation: blink 0.45s normal 0s infinite;
      animation-direction: alternate;
    }
    
    #custom-cursor-typewriter:after {
      border-right: 4px solid rgb(99, 238, 99);
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
    
    const CustomTypewriter: React.FC = () => {

    const CustomCursorTypewriter: React.FC = ({}) => {
      const targetText = "Welcome to React useTypewriter. This is a typewriter with custom cursor (color).";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });
  return (
    <div className="custom-cursor-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="custom-cursor-typewriter">
          {typedText}
        </div>
      </div>
    </div>
  );
};

export default CustomCursorTypewriter;`,
  }

  const targetText =
    "Welcome to React useTypewriter. This is a typewriter with custom cursor (color).";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });
  return (
    <div className="custom-cursor-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="custom-cursor-typewriter">
          {typedText}
        </div>
      </div>
      <CodeSnippet CSS={CODE.CSS} Code={CODE.TSX} />
    </div>
  );
};

export default CustomCursorTypewriter;
