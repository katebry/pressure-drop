import type {
  PipeDiameter,
  PipeRoughness,
  ReynoldsNumber,
} from "@/utils/PressureDropTypes";

function Colebrook_Approximation(
  Re: ReynoldsNumber,
  e: PipeRoughness,
  D: PipeDiameter
) {
  const A = (Re * e) / D / 8.0897;
  const B = Math.log(Re) - 0.779626;
  const x = A + B;
  const C = Math.log(x);

  const f_working = 0.8685972 * (B - C + C / (x - 0.5588 * C + 1.2079));
  const f = 1 / Math.pow(f_working, 2);
  console.log(Re, "Re");
  console.log(f_working, "f_working");
  return f;
}

export { Colebrook_Approximation };
