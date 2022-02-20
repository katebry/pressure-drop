import { expect, test } from "@jest/globals";
import {
  DarcyWeisbach_delp,
  DarcyWeisbach_K,
  DarcyWeisbach_v,
} from "../DarcyWeisbach";

test("The pressure drop is returned ", () => {
  expect(DarcyWeisbach_delp(14, 8, 9, 3.4, 4)).toBe(2371.764705882353);
  expect(DarcyWeisbach_delp(140, 8.96, 9.89, 3, 4.89)).toBe(49442.315865599994);
});

test("The pressure drop is returned ", () => {
  expect(DarcyWeisbach_K(14, 8, 9)).toBe(4536);
  expect(DarcyWeisbach_K(140, 8.96, 12.3)).toBe(94889.08800000002);
});

test("The pressure drop is returned ", () => {
  expect(DarcyWeisbach_v(14, 8, 9, 9, 4536)).toBe(9);
});
