import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import "./custom.css";

interface Props {}

const TypewriterWithLoop: React.FC<Props> = ({}) => {
  const targetText =
    "Welcome to React useTypewriter. This is a typewriter with looping effect.";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
    loopDelay: 500,
    loop: true,
  });
  return <div className={wrapperClassName}>{typedText}</div>;
};

export default TypewriterWithLoop;
