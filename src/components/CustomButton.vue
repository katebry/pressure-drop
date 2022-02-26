<template>
  <button @click="$emit('calculate')">{{ text }}</button>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
  },
  emits: ["calculate"],
};
</script>

<style scoped>
button {
  font-size: 18px;
  border-radius: 3px;
}

button:active {
  background-color: #faf9f6;
}

button:hover {
  background-color: #faf9f6;
}
</style>
