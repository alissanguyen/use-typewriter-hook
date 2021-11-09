import { useEffect, useRef } from "react";

function useInterval(
  callback: () => void,
  delayMillis: number | null,
  callImmediately: boolean = false
) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
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

export default useInterval;
