import type {
  FluidDensity,
  FluidVelocity,
  FluidViscosity,
  PipeDiameter,
} from "@/utils/PressureDropTypes";

function ReynoldsNumber(
  rho: FluidDensity,
  v: FluidVelocity,
  D: PipeDiameter,
  mu: FluidViscosity
): number {
  const Re = (rho * v * D) / mu;
  console.log(Re, "reynolds number");
  return Re;
}

export { ReynoldsNumber };
