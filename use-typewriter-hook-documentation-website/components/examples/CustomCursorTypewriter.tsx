import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight as style } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    TSX = `import { useTypewriter } from "use-typewriter-hook";

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
      <pre className="example-typewriter-code-snippet"></pre>
    </div>
  );
};
    `,
  }
  const customStyle = {
    backgroundColor: "transparent",
    filter: "hue-rotate(-20deg) contrast(150%) brightness(1.5)",
    maxWidth: "900px",
    border: "none",
    padding: "0 1rem",
    fontFamily:
      "font-family: Andale Mono, AndaleMono, Lucida Console, monospace;",
  };
  const [codeToShow, setCodeToShow] = React.useState(CODE.TSX);
  const [language, setLanguage] = React.useState("typescript");
  const codeString = codeToShow;
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
      <div className="example-typewriter-code-snippet-wrapper">
        <div className="code-snippet-button-group">
          <div>
            <button
              className="code-snippet-button"
              id="view-code-button"
              onClick={() => {
                setCodeToShow(CODE.TSX);
                setLanguage("typescript");
              }}
            >
              View Code
            </button>
            <button
              className="code-snippet-button"
              id="view-css-button"
              onClick={() => {
                setCodeToShow(CODE.CSS);
                setLanguage("css");
              }}
            >
              CSS
            </button>
          </div>
          <div>
            <button className="code-snippet-button" id="copy-code-button">
              Copy code
            </button>
          </div>
        </div>
        <div className="example-typewriter-code-snippet">
          <SyntaxHighlighter
            language={language}
            style={style}
            customStyle={customStyle}
            lineProps={{
              style: { wordBreak: "break-word", whiteSpace: "pre-wrap" },
            }}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CustomCursorTypewriter;
