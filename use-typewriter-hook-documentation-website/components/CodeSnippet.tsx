import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight as style } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  CSS: string;
  Code: string;
}

const CodeSnippet: React.FC<Props> = (props) => {
  const [codeToShow, setCodeToShow] = React.useState(props.Code);
  const [language, setLanguage] = React.useState("typescript");

  const customStyle = {
    backgroundColor: "transparent",
    filter: "hue-rotate(-20deg) contrast(150%) brightness(1.5)",
    maxWidth: "900px",
    border: "none",
    padding: "0 1rem",
    overflowX: "hidden",
    fontFamily:
      "font-family: Andale Mono, AndaleMono, Lucida Console, monospace;",
  };

  return (
    <div className="example-typewriter-code-snippet-wrapper">
      <div className="code-snippet-button-group">
        <div>
          <button
            className="code-snippet-button"
            id="view-code-button"
            onClick={() => {
              setCodeToShow(props.Code);
              setLanguage("typescript");
            }}
          >
            View Code
          </button>
          <button
            className="code-snippet-button"
            id="view-css-button"
            onClick={() => {
              setCodeToShow(props.CSS);
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
          {codeToShow}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
