import * as React from "react";
import { TypewriterConfig } from "./types";
import useInterval from "./utils/useInterval";
import "./useTypewriter.css";
import { findCommonSubstring } from "./utils/string-utils";

const DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";

const CONFIGURATION_DEFAULTS: TypewriterConfig = {
  targetText: "",
  autoStartDelay: 100,
  typingDelayMillis: 100,
  wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
  loop: false,
};

enum TypingDirection {
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD",
}

export const useTypewriter = (config?: Partial<TypewriterConfig>) => {
  /**
   * Use defaults, override defaults where ever the user set something in the config =)
   */
  const resolvedConfig: Required<TypewriterConfig> = {
    ...CONFIGURATION_DEFAULTS,
    ...config,
  };

  const targetTextArray = Array.isArray(resolvedConfig.targetText)
    ? resolvedConfig.targetText
    : [resolvedConfig.targetText];

  const isPausedRef = React.useRef(false);

  /**
   * Util function, used to pause the typing effect
   * @returns
   */
  function pause(ref: any) {
    const refCopy = { ...ref };
    refCopy.current = true;
    return refCopy;
  }

  const [typingDirection, setTypingDirection] = React.useState<TypingDirection>(
    TypingDirection.FORWARD
  );

  /**
   * We are going to have an array of text values
   * and we are going to have a pointer to which index in that array we want to show currently
   *
   * useTypeWriter(["Hi I'm alissa, I'm a painter", "Hi I'm alissa, I'm a writer"])
   *
   */

  const [sentencePointer, setSentencePointer] = React.useState<number>(0);
  const [textValue, setTextValue] = React.useState("");
  const [startTypewriter, setStartTypewriter] = React.useState(false);

  const targetTextRef = React.useRef(targetTextArray[sentencePointer]);

  const erase = () => {
    /**
     * Every typingDelay milliseconds, add one character to the string until it is the targetText
     */
    if (isPausedRef.current || !startTypewriter) {
      return;
    }

    setTextValue((prev) => {
      const stringWithoutLastCharacter = prev.slice(0, prev.length - 1);

      // console.log("Erasing, next character: " + stringWithoutLastCharacter);

      return stringWithoutLastCharacter;
    });
  };

  const type = () => {
    /**
     * Every typingDelay milliseconds, add one character to the string until it is the targetText
     */
    if (isPausedRef.current || !startTypewriter) {
      return;
    }

    setTextValue((prev) => {
      const nextCharacterToAdd = targetTextRef.current.charAt(prev.length);

      const nextTextValue = prev + nextCharacterToAdd;

      return nextTextValue;
    });
  };

  console.log("CURRENT TEXT: ", textValue);
  console.log("CURRENT DIRECTION: ", typingDirection);
  console.log("CURRENT SENTENCE POINTER: ", sentencePointer);
  console.log("CURRENT TARGET TEXT: ", targetTextRef.current);

  const handleReachingTargetText = () => {};

  React.useEffect(() => {
    setTimeout(() => {
      setStartTypewriter(true);
    }, resolvedConfig.autoStartDelay);
  }, [resolvedConfig.autoStartDelay]);

  const handleChange = () => {
    if (typingDirection === TypingDirection.FORWARD) {
      type();
    } else if (typingDirection === TypingDirection.BACKWARD) {
      erase();
    }
  };

  /**
   * The case if we are equal to the text we set out to type
   */
  React.useEffect(() => {
    if (textValue !== targetTextRef.current) {
      return;
    }

    if (typingDirection === TypingDirection.FORWARD) {
      console.log("Reached target, calling handleReachingTargetText");
      setSentencePointer((prevSentencePointer) => {
        const nextSentencePointer = targetTextArray.length
          ? calculateNextSentencePointer(
              targetTextArray.length,
              prevSentencePointer
            )
          : 0;

        /**
         * If we finished typing a sentence and there were sentences to type, rather than just a single string:
         * Then set the next text we want to set out to type to the common substring between the sentence
         * we just finished typing and the next sentence.
         */
        if (Array.isArray(resolvedConfig.targetText)) {
          // Find the common substring between the current targetText and the next targetText
          targetTextRef.current = findCommonSubstring(
            targetTextRef.current,
            targetTextArray[nextSentencePointer]
          );
        } else {
          targetTextRef.current = "";
        }

        return nextSentencePointer;
      });
    } else if (typingDirection === TypingDirection.BACKWARD) {
      /**
       * When finishing going backwards, we are never going to the next
       * sentence, just beginning to type the current one and we have to
       * begin typing in the forward direction */

      console.log("previous target: ", targetTextRef.current);
      console.log("sentencePointer", sentencePointer);
      console.log("sentences", targetTextArray);
      targetTextRef.current = targetTextArray[sentencePointer];
      console.log("after target: ", targetTextRef.current);
    }

    setTypingDirection((prevDirection) => {
      /** 1. Decide which direction we go next */

      const nextDirection =
        prevDirection === TypingDirection.FORWARD
          ? TypingDirection.BACKWARD
          : TypingDirection.FORWARD;

      return nextDirection;
    });
  }, [textValue]);

  useInterval(
    handleChange,
    startTypewriter ? resolvedConfig.typingDelayMillis : null,
    true
  );

  return {
    textValue,
    pause,
    wrapperClassName: resolvedConfig.wrapperClassName,
  };
};

/**
 * 1. If we are at a sentence not at the end of the sentences array, return
 * 2. If we are at a sentence at the end of the sentences array, return 0
 */
const calculateNextSentencePointer = (
  numberOfSentences: number,
  currentSentenceIndex: number
) => {
  return currentSentenceIndex === numberOfSentences - 1
    ? 0
    : currentSentenceIndex + 1;
};
