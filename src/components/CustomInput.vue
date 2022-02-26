<template>
  <div class="container">
    <label>
      {{ label }}
    </label>
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

<script lang="ts">
export default {
  props: ["modelValue", "label", "unit"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
input {
  font-size: 19px;
  padding: 3px;
  max-height: 22px;
}
.container {
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  grid-gap: 20px;
  padding: 15px;
}
.unit {
  font-weight: bold;
}
</style>
