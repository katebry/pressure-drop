<script>
export default {
  props: ["key", "modelValue", "label", "unit"],
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
    {{ unit }}
  </div>
</template>

<style scoped>
input {
}
.label {
  grid-area: 2 / 2 / 4 / 3;
  background-color: yellow;
  /*margin-right: 3rem;*/
}
.inputWrapper {
  grid-area: 2 / 3 / 4 / 4;
  background-color: pink;
  /*align-content: baseline;*/
}
</style>
