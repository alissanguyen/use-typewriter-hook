import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

const BasicTypewriter: React.FC = () => {
  const [isViewingCSS, setIsViewingCSS] = React.useState(false);
  const targetText =
    "Welcome to React useTypewriter. This is a basic typewriter. You can also display emojis, like this 😜 🤩 🥳 😍 !";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });

  const codeString = `import { useTypewriter } from "use-typewriter-hook";

  const BasicTypewriter: React.FC = () => {
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
        <pre className="example-typewriter-code-snippet">
         
        </pre>
      </div>
    );
  };
  `;
  return (
    <div className="basic-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="basic-typewriter">
          {typedText}
        </div>
      </div>
      <div className="example-typewriter-code-snippet-wrapper">
        <div className="code-snippet-button-group">
          <div>
            <button className="code-snippet-button-code">View Code</button>
            <button className="code-snippet-button-css">CSS</button>
          </div>
          <div>
            <button className="code-snippet-copy-button">Copy code</button>
          </div>
        </div>
        <pre className="example-typewriter-code-snippet">
          {!isViewingCSS ? codeString : ""}
        </pre>
      </div>
    </div>
  );
};

export default BasicTypewriter;
