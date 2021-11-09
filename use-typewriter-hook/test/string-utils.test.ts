import { findCommonSubstring } from "../src/index";

describe("string-utils", () => {
  describe("findCommonSubstring", () => {
    it('correctly identifies common substring of "hello" and "hey" is "he"', () => {
      expect(findCommonSubstring("hello", "hey")).toEqual("he");
    });

    it('correctly identifies common substring of "pineapple" and "pen"', () => {
      expect(findCommonSubstring("pineapple", "pen")).toEqual("p");
    });
  });
});
