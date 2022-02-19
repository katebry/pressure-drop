import { expect } from "@jest/globals";
import { ReynoldsNumber } from "../ReynoldsNumber";

test("If 1's are passed into the ReynoldsNumber function, 1 is returned", () => {
  expect(ReynoldsNumber(1, 1, 1, 1)).toBe(1);
});
