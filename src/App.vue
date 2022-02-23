<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="parent">
    <Header class="header" msg="You did it!" />
  </div>
</template>

<style>
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
