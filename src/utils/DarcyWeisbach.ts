import type {
  Pipelength,
  FrictionFactor,
  FluidDensity,
  PipeDiameter,
  FluidVelocity,
  KFactor,
  Delta,
} from "@/utils/DarcyWeisbachTypes";

function DarcyWeisbach_delp(
  L: Pipelength,
  f: FrictionFactor,
  rho: FluidDensity,
  D: PipeDiameter,
  v: FluidVelocity
): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const del_p = L * f * (rho / 2) * (Math.pow(v, 2) / D);
  console.log(del_p, "pdrop");
  return del_p;
}

function DarcyWeisbach_K(
  K: KFactor,
  rho: FluidDensity,
  v: FluidVelocity
): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const v = Math.pow((del_p / L) * (2 / rho) * (D / f), 0.5);
  return v;
}

export { DarcyWeisbach_delp, DarcyWeisbach_K, DarcyWeisbach_v };
