<template>
  <div v-for="input in InputDataFields" :key="input.id">
    <CustomInput
      :label="input.label"
      v-model="input.value"
      :unit="input.unit"
    />
  </div>
  <div class="calculateBtn">
    <CustomButton @calculate="calculateValues" text="Calculate" />
  </div>
</template>

<script lang="ts">
import CustomInput from "./CustomInput.vue";
import CustomButton from "./CustomButton.vue";

interface InputDataFieldsInterface {
  InputDataFields: {
    id: string;
    label: string;
    unit: string;
    value: number;
  };
}

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
  methods: {
    calculateValues(
      this: InputDataFieldsInterface,
      { density, viscosity, roughness, flowrate } = {
        density: this.InputDataFields[0].value,
        viscosity: this.InputDataFields[1].value,
        roughness: this.InputDataFields[2].value,
        flowrate: this.InputDataFields[3].value,
      }
    ) {
      console.log(density, viscosity, roughness, flowrate);
    },
  },
};
</script>

<style scoped>
.calculateBtn {
  padding: 15px;
}
</style>
