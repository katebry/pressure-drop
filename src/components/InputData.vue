<script>
import CustomInput from "./CustomInput.vue";
import CustomButton from "./CustomButton.vue";

export default {
  components: { CustomButton, CustomInput },
  data() {
    return {
      InputDataFields: [
        { id: "density", label: "Density", unit: "kg/m3", value: 0 },
        {
          id: "viscosity",
          label: "Dynamic viscosity",
          unit: "kg/ms",
          value: 0,
        },
        { id: "roughness", label: "Pipe roughness", unit: "mm", value: 0 },
        { id: "flowrate", label: "Flow rate", unit: "l/min", value: 0 },
      ],
    };
  },
};
</script>

<template>
  <div v-for="input in InputDataFields" :key="input.id">
    <CustomInput
      :label="input.label"
      v-model="input.value"
      :unit="input.unit"
    />
  </div>
  <div class="calculateBtn">
    <CustomButton text="Calculate" />
  </div>
</template>

<style scoped>
.calculateBtn {
  padding: 15px;
}
</style>
