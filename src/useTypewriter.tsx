import * as React from "react";
import { TypewriterConfig } from "./types";
import useInterval from "./utils/useInterval";
import "./useTypewriter.css";
import { type } from "os";

const DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";

const CONFIGURATION_DEFAULTS: TypewriterConfig = {
  targetText: "",
  autoStartDelay: 100,
  typingDelayMillis: 100,
  wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
};

export const useTypewriter = (
  config?: Partial<TypewriterConfig>
) => {
  /**
   * Use defaults, override defaults where ever the user set something in the config =)
   */
  const resolvedConfig: Required<TypewriterConfig> = {
    ...CONFIGURATION_DEFAULTS,
    ...config,
  };

  const isPausedRef = React.useRef(false);

  /**
   * Util function, used to pause the typing effect
   * @returns
   */
  function pause() {
    isPausedRef.current = true;
    return;
  }

  const [textValue, setTextValue] = React.useState("");
  const [startTypewriter, setStartTypewriter] = React.useState(false);

  const type = () => {
    /**
     * Every typingDelay milliseconds, add one character to the string until it is the targetText
     */
    if (isPausedRef.current || !startTypewriter) {
      return;
    }

    setTextValue((prev) => {
      const nextCharacterToAdd = resolvedConfig.targetText.charAt(prev.length);

      const nextTextValue = prev + nextCharacterToAdd;

      if (nextTextValue !== resolvedConfig.targetText) {
      }
      return nextTextValue;
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setStartTypewriter(true);
    }, resolvedConfig.autoStartDelay);
  }, [resolvedConfig.autoStartDelay]);

  useInterval(
    type,
    startTypewriter ? resolvedConfig.typingDelayMillis : null,
    true
  );

  return {
    textValue, 
    pause, 
    wrapperClassName: resolvedConfig.wrapperClassName
  };
};

