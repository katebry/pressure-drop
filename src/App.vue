<script setup lang="ts">
import Header from "./components/Header.vue";
import InputData from "./components/InputData.vue";
</script>

<template>
  <div class="parent">
    <Header class="header" />
    <InputData />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");

html,
body {
  font-family: "Roboto Slab", serif;
}

app {
  font-family: "Roboto Slab", serif;
}

.parent {
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr) 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.header {
  grid-area: 1 / 2 / 2 / 5;
}
</style>
