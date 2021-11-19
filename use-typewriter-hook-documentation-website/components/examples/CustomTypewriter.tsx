import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import CodeSnippet from "../CodeSnippet";

const CustomTypewriter: React.FC = () => {
  enum CODE {
    CSS = `.use-typewriter-cursor:after {
      content: "";
      border-right: 2px solid currentColor;
      animation: blink 0.45s normal 0s infinite;
      animation-direction: alternate;
    }
    
    .custom-typewriter-text {
      color: rgb(46, 46, 206);
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
      const targetText =
    "Welcome to React useTypewriter. This is a custom typewriter, you can highlight different words.";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loop: false,
  });

  /**
   * You can select as many words or phrases as you like to highlight/customize their color/bold
   * Here as an example, we select one phrase and one word to customize
   */
  const stringToSearch = "React useTypewriter";
  const stringToSearch2 = "highlight";

  const startIndex1 = targetText.indexOf(stringToSearch);
  const endIndex1 = startIndex1 + stringToSearch.length;
  const startIndex2 = targetText.indexOf(stringToSearch2);
  const endIndex2 = startIndex2 + stringToSearch2.length;

  const fragments = createBoldAndHighlightedReactNodes(
    typedText,
    startIndex1,
    endIndex1,
    startIndex2,
    endIndex2
  );

  return (
    <div className="custom-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="custom-typewriter">
          {fragments}
        </div>
      </div>
    </div>
  );
};
    
const createBoldAndHighlightedReactNodes = (
  str: string,
  startIndex1: number,
  endIndex1: number,
  startIndex2: number,
  endIndex2: number
): React.ReactNode[] => {
  const boldContents = str.slice(startIndex1, endIndex1);
  const highlightedContents = str.slice(startIndex2, endIndex2);
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a bolded span
   * return everything from endindex to str.length as a string
   */
  return [
    str.slice(0, startIndex1),
    <strong key={0} className="custom-typewriter-text">
      {boldContents}
    </strong>,
    str.slice(endIndex1, startIndex2),
    <mark key={1}>{highlightedContents}</mark>,
    str.slice(endIndex2, str.length),
  ];
};

export default CustomTypewriter;`,
  }

  const targetText =
    "Welcome to React useTypewriter. This is a custom typewriter, you can highlight different words.";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loop: false,
  });

  /**
   * You can select as many words or phrases as you like to highlight/customize their color/bold
   * Here as an example, we select one phrase and one word to customize
   */
  const stringToSearch = "React useTypewriter";
  const stringToSearch2 = "highlight";

  const startIndex1 = targetText.indexOf(stringToSearch);
  const endIndex1 = startIndex1 + stringToSearch.length;
  const startIndex2 = targetText.indexOf(stringToSearch2);
  const endIndex2 = startIndex2 + stringToSearch2.length;

  const fragments = createBoldAndHighlightedReactNodes(
    typedText,
    startIndex1,
    endIndex1,
    startIndex2,
    endIndex2
  );

  return (
    <div className="custom-typewriter-wrapper">
      <div className="example-typewriter-wrapper">
        <div className={wrapperClassName} id="custom-typewriter">
          {fragments}
        </div>
      </div>
      <CodeSnippet CSS={CODE.CSS} Code={CODE.TSX} />
    </div>
  );
};

const createBoldAndHighlightedReactNodes = (
  str: string,
  startIndex1: number,
  endIndex1: number,
  startIndex2: number,
  endIndex2: number
): React.ReactNode[] => {
  const boldContents = str.slice(startIndex1, endIndex1);
  const highlightedContents = str.slice(startIndex2, endIndex2);
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a bolded span
   * return everything from endindex to str.length as a string
   */
  return [
    str.slice(0, startIndex1),
    <strong key={0} className="custom-typewriter-text">
      {boldContents}
    </strong>,
    str.slice(endIndex1, startIndex2),
    <mark key={1}>{highlightedContents}</mark>,
    str.slice(endIndex2, str.length),
  ];
};

export default CustomTypewriter;
