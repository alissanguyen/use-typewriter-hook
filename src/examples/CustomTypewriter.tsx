import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

const CustomTypewriter: React.FC = () => {
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

  const fragments = splitTargetText(
    typedText,
    startIndex1,
    endIndex1,
    startIndex2,
    endIndex2
  );

  return (
    <div>
      <p className={wrapperClassName} id="custom-typewriter">
        {fragments}
      </p>
    </div>
  );
};

const splitTargetText = (
  str: string,
  startIndex1: number,
  endIndex1: number,
  startIndex2: number,
  endIndex2: number
): React.ReactNode[] => {
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a bolded span
   * return everything from endindex to str.length as a string
   */
  return [
    str.slice(0, startIndex1),
    <strong className="custom-typewriter-text">
      {str.slice(startIndex1, endIndex1)}
    </strong>,
    str.slice(endIndex1, startIndex2),
    <mark>{str.slice(startIndex2, endIndex2)}</mark>,
    str.slice(endIndex2, str.length),
  ];
};

export default CustomTypewriter;
