import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

interface Props {}

const targetText =
  "Welcome to React Typewriter. This is a new library that is better than all the other libraries and  you.";

const CustomTypewriter: React.FC<Props> = () => {
  const { textValue: textThatHasBeenTypedSoFar, wrapperClassName } =
    useTypewriter({
      targetText: targetText,
      autoStartDelay: 0,
      typingDelayMillis: 50,
    });

  const stringToSearch = "better than all";

  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;

  const fragments = splitTargetText(
    textThatHasBeenTypedSoFar,
    startIndex,
    endIndex
  );

  console.log(fragments);

  return (
    <div>
      <p className={wrapperClassName}>{fragments}</p>
    </div>
  );
};

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): React.ReactNode[] => {
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a bolded span
   * return everything from endindex to str.length as a string
   */

  return [
    str.slice(0, startIndex),
    <strong className="custom-typewriter">{str.slice(startIndex, endIndex)}</strong>,
    str.slice(endIndex, str.length),
  ];
};

export default CustomTypewriter;
