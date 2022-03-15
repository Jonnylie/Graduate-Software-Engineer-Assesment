import areaOfTriangle from "../question2.js";

test("properly calculate area of triangle", () => {
  expect(areaOfTriangle(3, 4, 5)).toBe(6);
  expect(areaOfTriangle(6, 8, 10)).toBe(24);
});
