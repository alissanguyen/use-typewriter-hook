import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import CodeSnippet from "../CodeSnippet";

const BasicTypewriter: React.FC = () => {
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
    
    const CustomTypewriter: React.FC = () => {

    const BasicTypewriter: React.FC = () => {
      const targetText = "Welcome to React useTypewriter. This is a basic typewriter. You can also display emojis, like this 😜 🤩 🥳 😍 !";
      const { textValue: typedText, wrapperClassName } = useTypewriter({
        targetText: targetText,
        typingDelayMillis: 50,
      });
      return (
        <div className="basic-typewriter-wrapper">
          <div className="example-typewriter-wrapper">
            <div className={wrapperClassName} id="basic-typewriter">
              {typedText}
            </div>
          </div>
        </div>
      );
    };

    export default BasicTypewriter;`,
  }

  const targetText =
    "Welcome to React useTypewriter. This is a basic typewriter. You can also display emojis, like this 😜 🤩 🥳 😍 !";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });

  return (
    <div className="basic-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="basic-typewriter">
          {typedText}
        </div>
      </div>
      <CodeSnippet CSS={CODE.CSS} Code={CODE.TSX} />
    </div>
  );
};

export default BasicTypewriter;
