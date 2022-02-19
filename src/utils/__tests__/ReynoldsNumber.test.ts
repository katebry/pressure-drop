import { Reynolds_Number } from "@/utils/ReynoldsNumber";
import { expect } from "@jest/globals";

test("If nothing is passed to the Reynolds number, nothing is returned", () => {
  expect(Reynolds_Number()).toBe(false);
});
