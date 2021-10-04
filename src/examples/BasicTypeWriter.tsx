import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

interface Props {}

const BasicTypeWriter: React.FC<Props> = () => {
  const [typedText, _, wrapperClassName] = useTypewriter({
    targetText:
      "Welcome to React Typewriter.Welcome to React Typewriter.Welcome to React Typewriter.Welcome to React Typewriter.",
    autoStartDelay: 100,
    typingDelayMillis: 5000,
  });

  return (
    <div>
      <p className={wrapperClassName}>{typedText}</p>
    </div>
  );
};

export default BasicTypeWriter;
