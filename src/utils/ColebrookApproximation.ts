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
  return 1 / Math.pow(f_working, 2);
}

export { Colebrook_Approximation };
