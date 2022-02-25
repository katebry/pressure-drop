<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
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
