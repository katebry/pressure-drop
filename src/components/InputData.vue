<template>
  <div class="wrapper">
    <div class="row">
      Density
      <input type="number" />
    </div>
    <div class="row">
      Dynamic viscosity
      <input type="number" />
    </div>
    <div class="row">
      Pipe roughness
      <input type="number" />
    </div>
    <div class="row">
      Flowrate
      <input type="number" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  grid-area: 2 / 2 / 4 / 4;
  /*padding: 90px;*/
}

.row {
  display: flex;
}
</style>
