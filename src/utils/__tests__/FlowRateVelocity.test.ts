import { expect, test } from "@jest/globals";
import { Q_to_v, v_to_Q } from "../FlowRateVelocity";

test("The velocity is returned when two vales are passed into the Q_to_v function", () => {
  expect(Q_to_v(14, 8)).toBe(0.2785211504108169);
  expect(Q_to_v(140, 8.96)).toBe(2.2203535587597005);
});

test("The volumetric flow rate is returned when two vales are passed into the Q_to_v function", () => {
  expect(v_to_Q(14, 8)).toBe(0.2785211504108169);
  expect(v_to_Q(140, 8.96)).toBe(2.2203535587597005);
});
