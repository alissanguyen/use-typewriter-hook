import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

interface Props {}

const TypewriterWithLoop: React.FC<Props> = ({}) => {
  const targetText =
    "Welcome to React Typewriter. This is a typewriter with looping effect.";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });
  return <div className={wrapperClassName}>{typedText}</div>;
};

export default TypewriterWithLoop;
