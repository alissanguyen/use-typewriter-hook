import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const AppName: React.FC<Props> = ({}) => {
  const targetText = "useTypewriter";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 100,
    loop: false,
  });

  const stringToSearch = "use";
  const stringToSearch2 = "Typewriter";

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
    <header
      className={wrapperClassName}
      id="documentation-page-header"
    >
      {fragments}
    </header>
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
    <p key={0} className="app-name-header-first-word">
      {boldContents}
    </p>,
    str.slice(endIndex1, startIndex2),
    <p className="app-name-header-second-word" key={1}>
      {highlightedContents}
    </p>,
    str.slice(endIndex2, str.length),
  ];
};
export default AppName;
