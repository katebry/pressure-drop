<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: { CustomInput },
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
        { id: "flowrate", label: "Flowrate", unit: "l/min", value: 0 },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div v-for="input in InputDataFields" :key="input.id">
      <CustomInput
        :label="input.label"
        v-model="input.value"
        :unit="input.unit"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  grid-area: 2 / 2 / 4 / 4;
  display: flex;
  flex-direction: column;
}
</style>
