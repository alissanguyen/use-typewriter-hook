import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const PartialBackspaceTypewriter: React.FC<Props> = ({}) => {
  const targetText = [
    "Welcome to React useTypewriter, this is a typewriter with backspacing effect!",
    "Hi, I'm Alissa. I'm a programmer.",
    "Hi, I'm Alissa. I'm an artist.",
    "Hi, I'm Alissa. I'm an anime lover.",
  ];
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loop: false,
  });
  return <div className={wrapperClassName}>{typedText}</div>;
};

export default PartialBackspaceTypewriter;
