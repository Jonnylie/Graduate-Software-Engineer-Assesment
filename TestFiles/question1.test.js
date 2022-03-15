import isNullOrEmpty from "../question1.js";

test("properly check input is null or empty", () => {
  expect(isNullOrEmpty("")).toBe(true);
  expect(isNullOrEmpty(null)).toBe(true);
  expect(isNullOrEmpty("a")).toBe(false);
  expect(isNullOrEmpty("null")).toBe(false);
});
