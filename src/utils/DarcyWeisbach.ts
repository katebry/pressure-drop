import type {
  Pipelength,
  FrictionFactor,
  FluidDensity,
  PipeDiameter,
  FluidVelocity,
  KFactor
} from "@/utils/DarcyWeisbachTypes";

function DarcyWeisbach_delp(
  L: Pipelength,
  f: FrictionFactor,
  rho: FluidDensity,
  D: PipeDiameter,
  v: FluidVelocity
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const del_p = L * f * (rho / 2) * (Math.pow(v, 2) / D);
  console.log(del_p, "pdrop");
  return del_p;
}

function DarcyWeisbach_K(K: KFactor, rho: FluidDensity, v: FluidVelocity) {
  const del_p = K * (rho / 2) * Math.pow(v, 2);
  console.log(del_p, "pdrop");
  return del_p;
}

export { DarcyWeisbach_delp };
