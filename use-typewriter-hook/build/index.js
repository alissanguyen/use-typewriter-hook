import * as React from "react";
const DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";
const CONFIGURATION_DEFAULTS = {
    targetText: "",
    autoStartDelay: 100,
    typingDelayMillis: 100,
    wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
    loop: false,
    loopDelay: 100,
};
var TypingDirection;
(function (TypingDirection) {
    TypingDirection["FORWARD"] = "FORWARD";
    TypingDirection["BACKWARD"] = "BACKWARD";
})(TypingDirection || (TypingDirection = {}));
export const useTypewriter = (config) => {
    

    const resolvedConfig = Object.assign(Object.assign({}, CONFIGURATION_DEFAULTS), config);
    debugger;
    const [typingDirection, setTypingDirection] = React.useState(TypingDirection.FORWARD);
    const [sentencePointer, setSentencePointer] = React.useState(0);
    const [textValue, setTextValue] = React.useState("");
    const [startTypewriter, setStartTypewriter] = React.useState(false);
    const targetTextArray = Array.isArray(resolvedConfig.targetText)
        ? resolvedConfig.targetText
        : [resolvedConfig.targetText];
    const isPausedRef = React.useRef(false);
    function pause() {
        isPausedRef.current = true;
    }
    function start() {
        isPausedRef.current = false;
    }
    const returnNextDirection = (prevDirection, targetString, loop, pointer) => {
        const nextDirection = prevDirection === TypingDirection.FORWARD
            ? TypingDirection.BACKWARD
            : TypingDirection.FORWARD;
        if (nextDirection === TypingDirection.BACKWARD) {
            if (loop) {
                return nextDirection;
            }
            if (pointer !== targetString.length - 1) {
                return nextDirection;
            }
            return prevDirection;
        }
        return nextDirection;
    };
    const targetTextRef = React.useRef(targetTextArray[sentencePointer]);
    const erase = () => {
        if (isPausedRef.current || !startTypewriter) {
            return;
        }
        setTextValue((prev) => {
            const stringWithoutLastCharacter = prev.slice(0, prev.length - 1);
            return stringWithoutLastCharacter;
        });
    };
    const type = () => {
        if (isPausedRef.current || !startTypewriter) {
            return;
        }
        setTextValue((prev) => {
            const nextCharacterToAdd = targetTextRef.current.charAt(prev.length);
            const nextTextValue = prev + nextCharacterToAdd;
            return nextTextValue;
        });
    };
    React.useEffect(() => {
        setTimeout(() => {
            setStartTypewriter(true);
        }, resolvedConfig.autoStartDelay);
    }, [resolvedConfig.autoStartDelay]);
    const handleChange = () => {
        if (typingDirection === TypingDirection.FORWARD) {
            type();
        }
        else if (typingDirection === TypingDirection.BACKWARD) {
            erase();
        }
    };
    React.useEffect(() => {
        if (textValue !== targetTextRef.current) {
            return;
        }
        if (typingDirection === TypingDirection.FORWARD) {
            setSentencePointer((prevSentencePointer) => {
                const nextSentencePointer = targetTextArray.length
                    ? calculateNextSentencePointer(targetTextArray.length, prevSentencePointer)
                    : 0;
                if (Array.isArray(resolvedConfig.targetText)) {
                    targetTextRef.current = findCommonSubstring(targetTextRef.current, targetTextArray[nextSentencePointer]);
                }
                else {
                    targetTextRef.current = "";
                }
                return nextSentencePointer;
            });
        }
        else if (typingDirection === TypingDirection.BACKWARD) {
            targetTextRef.current = targetTextArray[sentencePointer];
        }
        setTimeout(() => {
            setTypingDirection((prevDirection) => {
                return returnNextDirection(prevDirection, targetTextArray, resolvedConfig.loop, sentencePointer);
            });
        }, resolvedConfig.loopDelay);
    }, [textValue]);
    useInterval(handleChange, startTypewriter ? resolvedConfig.typingDelayMillis : null, true);
    return {
        textValue,
        pause,
        start,
        wrapperClassName: resolvedConfig.wrapperClassName,
    };
};
const calculateNextSentencePointer = (numberOfSentences, currentSentenceIndex) => {
    return currentSentenceIndex === numberOfSentences - 1
        ? 0
        : currentSentenceIndex + 1;
};
function useInterval(callback, delayMillis, callImmediately = false) {
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    React.useEffect(() => {
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
export function findCommonSubstring(string1, string2) {
    const str1 = [...string1];
    const str2 = [...string2];
    let commonSubstring = "";
    for (let i = 0; i <= string1.length - 1; i++) {
        if (str1[i] === str2[i]) {
            commonSubstring = commonSubstring + str1[i];
        }
        else {
            return commonSubstring;
        }
    }
    return commonSubstring;
}
