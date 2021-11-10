import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";
import "./website.css";

interface Props {}

const Logo: React.FC<Props> = ({}) => {
  const targetText =
    "useTypewriter";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 100,
    typingDelayMillis: 50,
    loopDelay: 500,
    loop: true,
  });
  return <div className={`${wrapperClassName} logo`}>{typedText}</div>;
};

export default Logo;
