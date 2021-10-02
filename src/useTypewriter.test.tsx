import { renderHook } from "@testing-library/react-hooks";
import { useTypewriter } from "./useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test("it returns the correct value", () => {
    const hookResult = renderHook(() => useTypewriter({ targetText: "test" }));

    expect(hookResult.result.all[0]).toMatchObject(["", expect.any(Function)]);
  });

  // test("it adds characters over time", () => {
  //   const hookResult = renderHook(() =>
  //     useTypewriter({ typingDelayMillis: 500, targetText: "test" })
  //   );

  //   expect(hookResult.result.all[1]).not.toMatchObject([
  //     "t",
  //     expect.any(Function),
  //   ]);

  //   jest.advanceTimersByTime(1000);
  //   hookResult.rerender();
  //   act(() => {
  //     expect(hookResult.result.current).toMatchObject([
  //       "t",
  //       expect.any(Function),
  //     ]);
  //   });
  // });
});
