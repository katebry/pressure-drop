import { expect, test } from "@jest/globals";
import { ReynoldsNumber } from "../ReynoldsNumber";

test("If 1's are passed into the ReynoldsNumber function, 1 is returned", () => {
  expect(ReynoldsNumber(1, 1, 1, 1)).toBe(1);
});

test("When integers are passed into the ReynoldsNumber function, the correct value is returned", () => {
  expect(ReynoldsNumber(2, 1, 60, 1)).toBe(120);
});

test("When floats are passed into the ReynoldsNumber function, the full value is returned", () => {
  expect(ReynoldsNumber(1000, 2.16, 60.995, 1)).toBe(131749.19999999998);
});
