import type {
  FluidDensity,
  FluidVelocity,
  FluidViscosity,
  PipeDiameter,
} from "@/utils/ReynoldsNumberTypes";

function Reynolds_Number(
  rho: FluidDensity,
  v: FluidVelocity,
  D: PipeDiameter,
  mu: FluidViscosity
): number {
  const Re = (rho * v * D) / mu;
  console.log(Re, "reynolds number");
  return Re;
}

export { Reynolds_Number };
