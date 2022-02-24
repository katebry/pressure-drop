<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import InputData from "./components/InputData.vue";
</script>

<template>
  <div class="parent">
    <SiteHeader class="header" />
    <div class="mainContent">
      <InputData />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");

html,
app,
body {
  font-family: "Roboto Slab", serif;
  font-size: 19px;
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

.mainContent {
  grid-area: 2 / 2 / 5 / 5;
  background-color: #1E6FB8;
  padding: 3rem;
  border-radius: 1rem;
}
</style>
