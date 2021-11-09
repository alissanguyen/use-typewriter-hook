import { renderHook } from "@testing-library/react-hooks";
import { useTypewriter } from "../src";

describe("useTypewriter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test("it returns the correct value", () => {
    const hookResult = renderHook(() => useTypewriter({ targetText: "test" }));

    expect(hookResult.result.all[0]).toMatchObject({
      textValue: "",
      pause: expect.any(Function),
      wrapperClassName: expect.any(String),
    });
  });
});
