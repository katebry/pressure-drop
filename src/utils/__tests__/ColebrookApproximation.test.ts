import { expect, test } from "@jest/globals";
import { Colebrook_Approximation } from "../ColebrookApproximation";

test("The velocity is returned when two vales are passed into the Q_to_v function", () => {
  expect(Colebrook_Approximation(131749.19999999998, 0.05, 8)).toBe(
    0.03312240910904646
  );
  expect(Colebrook_Approximation(140, 0.015, 8.96)).toBe(0.14335489283416894);
});
