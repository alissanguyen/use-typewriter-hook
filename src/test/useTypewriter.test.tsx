import { renderHook } from "@testing-library/react-hooks";
import { useTypewriter } from "../useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test("it returns the correct value", () => {
    const hookResult = renderHook(() => useTypewriter({ targetText: "test" }));

    expect(hookResult.result.all[0]).toMatchObject({
      textValue: expect.any(String),
      pause: expect.any(Function),
      wrapperClassName: expect.any(String),
    });
  });
});
