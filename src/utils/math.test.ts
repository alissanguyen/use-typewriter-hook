import { add } from "./math";

describe("math functions", () => {
  describe("add", () => {
    test("adding positive numbers", () => {
      expect(add(144, 1)).toEqual(145);
    });
    test("adding negative numbers", () => {
      expect(add(-144, -1)).toEqual(-145);
    });
  });
});
