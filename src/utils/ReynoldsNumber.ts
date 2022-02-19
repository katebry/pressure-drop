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
  return (rho * v * D) / mu;
}

export { ReynoldsNumber };
