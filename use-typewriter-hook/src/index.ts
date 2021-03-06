import * as React from "react";

export interface TypewriterConfig {
  /**
   * Strings to type out when using this tool
   */
  targetText: string | string[];
  /**
   * Amout of milliseconds delay at the start of the typewriter effect
   */
  autoStartDelay: number;
  /**
   * Amount of milliseconds delay beteen each char.
   */
  typingDelayMillis: number;
  /**
   * Warpper classname, use for styling
   */
  wrapperClassName: string;
  /**
   * Option to loop
   */
  loop: boolean;
  /**
   * The duration between each loop if `loop` option is true
   */
  loopDelay: number;
}

const DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";

const CONFIGURATION_DEFAULTS: TypewriterConfig = {
  targetText: "",
  autoStartDelay: 100,
  typingDelayMillis: 100,
  wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
  loop: false,
  loopDelay: 100,
};

enum TypingDirection {
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD",
}

export const useTypewriter = (config?: Partial<TypewriterConfig>) => {
  // Use defaults, override defaults where ever the user set something in the config =)
  const resolvedConfig: Required<TypewriterConfig> = {
    ...CONFIGURATION_DEFAULTS,
    ...config,
  };

  /**
   * The typing direction: forward or backward
   */
  const [typingDirection, setTypingDirection] = React.useState<TypingDirection>(
    TypingDirection.FORWARD
  );

  /**
   * We are going to have an array of text values
   * and we are going to have a pointer to which index in that array we want to show currently
   */
  const [sentencePointer, setSentencePointer] = React.useState<number>(0);

  /**
   * The text/string we typed out so far
   */
  const [textValue, setTextValue] = React.useState("");

  /**
   * Start the typewriter effect
   */
  const [startTypewriter, setStartTypewriter] = React.useState(false);

  // Check if users give an array of sentences (strings) or one sentence (string).
  const targetTextArray = Array.isArray(resolvedConfig.targetText)
    ? resolvedConfig.targetText
    : [resolvedConfig.targetText];

  const isPausedRef = React.useRef(false);

  /**
   * Util function, used to pause the typing effect
   * @returns
   */
  function pause() {
    isPausedRef.current = true;
  }

  /**
   * Util function, used to start the typewriter effect
   */
  function start() {
    isPausedRef.current = false;
  }
  /**
   * Function to check if needed to pause the typewriter effect
   * @param stringVal
   * @param targetString
   * @param loop
   */
  const returnNextDirection = (
    prevDirection: TypingDirection,
    targetString: string[],
    loop: boolean,
    pointer: number
  ) => {
    /** Decide which direction we go next */
    const nextDirection =
      prevDirection === TypingDirection.FORWARD
        ? TypingDirection.BACKWARD
        : TypingDirection.FORWARD;
    /**
     * If the next direction is backward, check if we should go backward:
     *   a. If the user only gives one sentence and chooses not to loop,
     *      then we should not go backward.
     *   b. If the user gives an array (>1) of sentences and chooses not to
     *      loop, then we should not go backward if we are at the last sentence
     *      (last element in the sentences array).
     *   c. If the user chooses to loop, then no matter the amount of sentences,
     *      we always go backward after done typing any sentences.
     */
    if (nextDirection === TypingDirection.BACKWARD) {
      // If the user wants to loop, we return the next direction
      if (loop) {
        return nextDirection;
      }
      // If the user does not want to loop, check if we reach the targetText or the final sentence of the targetText, if not, we return the next direction
      if (pointer !== targetString.length - 1) {
        return nextDirection;
      }
      return prevDirection;
    }
    return nextDirection;
  };

  const targetTextRef = React.useRef(targetTextArray[sentencePointer]);

  /**
   * Function to delete char from the text
   */
  const erase = () => {
    if (isPausedRef.current || !startTypewriter) {
      return;
    }

    // Every typingDelay milliseconds, add one character to the string until it is the targetText
    setTextValue((prev) => {
      const stringWithoutLastCharacter = prev.slice(0, prev.length - 1);
      return stringWithoutLastCharacter;
    });
  };

  /**
   * Function to type char from the text
   */
  const type = () => {
    if (isPausedRef.current || !startTypewriter) {
      return;
    }

    // Every typingDelay milliseconds, add one character to the string until it is the targetText
    setTextValue((prev) => {
      const nextCharacterToAdd = targetTextRef.current.charAt(prev.length);
      const nextTextValue = prev + nextCharacterToAdd;
      return nextTextValue;
    });
  };

  // Start the typewriter effect after autoStartDelay millis
  React.useEffect(() => {
    setTimeout(() => {
      setStartTypewriter(true);
    }, resolvedConfig.autoStartDelay);
  }, [resolvedConfig.autoStartDelay]);

  /**
   * Handle change in direction
   */
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
      targetTextRef.current = targetTextArray[sentencePointer];
    }

    setTimeout(() => {
      setTypingDirection((prevDirection) => {
        return returnNextDirection(
          prevDirection,
          targetTextArray,
          resolvedConfig.loop,
          sentencePointer
        );
      });
    }, resolvedConfig.loopDelay);
  }, [textValue]);

  useInterval(
    handleChange,
    startTypewriter ? resolvedConfig.typingDelayMillis : null,
    true
  );

  return {
    textValue,
    pause,
    start,
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

function useInterval(
  callback: () => void,
  delayMillis: number | null,
  callImmediately = false
) {
  const savedCallback = React.useRef(callback);

  // Remember the latest callback if it changes.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delayMillis === null) {
      return;
    }

    if (callImmediately) {
      savedCallback.current();
    }

    const id = setInterval(() => savedCallback.current(), delayMillis);

    return () => clearInterval(id);
  }, [delayMillis, callImmediately]);
}

export function findCommonSubstring(string1: string, string2: string): string {
  const str1 = [...string1];
  const str2 = [...string2];
  let commonSubstring = "";

  for (let i = 0; i <= string1.length - 1; i++) {
    if (str1[i] === str2[i]) {
      commonSubstring = commonSubstring + str1[i];
    } else {
      return commonSubstring;
    }
  }

  return commonSubstring;
}
