import type {
  Diameter,
  FluidVelocity,
  VolumetricFlowRate,
} from "@/utils/FlowRateVelocityTypes";

function Q_to_v(Q: VolumetricFlowRate, D: Diameter): number {
  const v = Q / (Math.PI * Math.pow(D / 2, 2));
  console.log(v, "velocity");
  return v;
}

function v_to_Q(v: FluidVelocity, D: Diameter) {
  const Q = v / (Math.PI * Math.pow(D / 2, 2));
  console.log(Q, "volumetric flow rate");
  return Q;
}

export { Q_to_v, v_to_Q };
