import * as React from "react";
import { useTypewriter } from "../useTypewriter";

interface Props {}

const PartialBackspaceTypewriter: React.FC<Props> = ({}) => {
  const targetText = [
    "Hi, I'm Alissa. I'm a programmer.",
    "Hi, I'm Alissa. I'm an artist.",
    "Hi, I'm Alissa. I'm a wife.",
  ];
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 100,
    loop: false,
  });
  return <div className={wrapperClassName}>{typedText}</div>;
};

export default PartialBackspaceTypewriter;
