import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const Author: React.FC<Props> = ({}) => {
  const targetText = "From Alissa Nguyen with love. :)";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 100,
    typingDelayMillis: 100,
    loopDelay: 600,
    loop: true,
  });
  return <div className={`${wrapperClassName} author`}>{typedText}</div>;
};

export default Author;
