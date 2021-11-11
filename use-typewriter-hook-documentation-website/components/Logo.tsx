import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const Logo: React.FC<Props> = ({}) => {
  const targetText = "useTypewriter";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 100,
    loopDelay: 500,
    loop: true,
  });

  return <p className={`${wrapperClassName} app-name`}>{typedText}</p>;
};

export default Logo;
