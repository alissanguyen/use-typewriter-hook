import * as React from "react";
import { TypewriterConfig } from "./types";
import useInterval from "./utils/useInterval";
import "./useTypewriter.css";

const DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";

const CONFIGURATION_DEFAULTS: TypewriterConfig = {
  targetText: "",
  startDelayMillis: 100,
  typingDelayMillis: 100,
  wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
};

type UseTypewriterReturnValue = [string, () => void, string];

export const useTypewriter = (
  config?: Partial<TypewriterConfig>
): UseTypewriterReturnValue => {
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

  const delayForNextKeypress = resolvedConfig.typingDelayMillis;

  useInterval(() => {
    /**
     * Every typingDelay milliseconds, add one character to the string until it is the targetText
     */
    if (isPausedRef.current) {
      return;
    }

    setTextValue((prev) => {
      const nextCharacterToAdd = resolvedConfig.targetText.charAt(prev.length);

      const nextTextValue = prev + nextCharacterToAdd;

      if (nextTextValue !== resolvedConfig.targetText) {
      }

      return nextTextValue;
    });
  }, delayForNextKeypress);

  // React.useEffect(() => {
  //   const styleElem = document.createElement("style");

  //   styleElem.innerHTML = `
  //     .alissa {

  //     }
  //   `;

  //   document.head.appendChild(styleElem);
  // }, []);

  return [textValue, pause, resolvedConfig.wrapperClassName];
};

// function getRandomNumberInRange(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

/**
 * Nice to have features,
 *
 * 1. As a consuemr of useTypewriter, I want to be able to pause and restart typing.
 */

// function executor(x: number, fn: any) {
//   return x + fn(x)
// }

// function foo(x: number) {
//   return x
// }

// function bar(x: number) {
//   return x / 2
// }

// executor(10, foo) // 20
// executor(10, bar) // 15

// function render(alissasSetStateFunction) {
//   const nextState = alissasSetStateFunction(previousState)
// }

// executor(10, (x: number) => {
//   return ()x + x) / x
// })
