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
  const del_p = L * f * (rho / 2) * (Math.pow(v, 2) / D);
  console.log(del_p, "pdrop");
  return del_p;
}

function DarcyWeisbach_K(
  K: KFactor,
  rho: FluidDensity,
  v: FluidVelocity
): number {
  const del_p = K * (rho / 2) * Math.pow(v, 2);
  console.log(del_p, "pdrop");
  return del_p;
}

function DarcyWeisbach_v(
  L: Pipelength,
  f: FrictionFactor,
  rho: FluidDensity,
  D: PipeDiameter,
  del_p: Delta
): number {
  const v = Math.pow((del_p / L) * (2 / rho) * (D / f), 0.5);
  console.log(v, "velocity");
  return v;
}

export { DarcyWeisbach_delp, DarcyWeisbach_K, DarcyWeisbach_v };
