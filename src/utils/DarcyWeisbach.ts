import type {
  Pipelength,
  FrictionFactor,
  FluidDensity,
  PipeDiameter,
  FluidVelocity,
  KFactor,
  Delta,
} from "@/utils/PressureDropTypes";

function DarcyWeisbach_delp(
  L: Pipelength,
  f: FrictionFactor,
  rho: FluidDensity,
  D: PipeDiameter,
  v: FluidVelocity
): number {
  return L * f * (rho / 2) * (Math.pow(v, 2) / D);
}

function DarcyWeisbach_K(
  K: KFactor,
  rho: FluidDensity,
  v: FluidVelocity
): number {
  return K * (rho / 2) * Math.pow(v, 2);
}

function DarcyWeisbach_v(
  L: Pipelength,
  f: FrictionFactor,
  rho: FluidDensity,
  D: PipeDiameter,
  del_p: Delta
): number {
  return Math.pow((del_p / L) * (2 / rho) * (D / f), 0.5);
}

export { DarcyWeisbach_delp, DarcyWeisbach_K, DarcyWeisbach_v };
