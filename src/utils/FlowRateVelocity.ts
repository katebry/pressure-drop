import type {
  PipeDiameter,
  FluidVelocity,
  VolumetricFlowRate,
} from "@/utils/PressureDropTypes";

function Q_to_v(Q: VolumetricFlowRate, D: PipeDiameter): number {
  return Q / (Math.PI * Math.pow(D / 2, 2));
}

function v_to_Q(v: FluidVelocity, D: PipeDiameter): number {
  return v / (Math.PI * Math.pow(D / 2, 2));
}

export { Q_to_v, v_to_Q };
