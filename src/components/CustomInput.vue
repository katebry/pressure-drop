<script>
export default {
  props: ["modelValue", "label", "unit"],
  emits: ["update:modelValue"],
};
</script>

<template>
  <div class="label">
    {{ label }}
  </div>
  <div class="inputWrapper">
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="unit">
      {{ unit }}
    </div>
  </div>
</template>

<style scoped>
input {
  font-size: 19px;
}
.label {
  grid-area: 2 / 2 / 4 / 3;
  margin: 10px 0;
}
.inputWrapper {
  grid-area: 2 / 3 / 4 / 4;
  display: flex;
}
.unit {
  font-weight: bold;
  margin-left: 10px;
}
</style>
