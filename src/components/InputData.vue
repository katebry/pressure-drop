<template>
  <div class="wrapper">
    <div class="row">
      Density
      <input type="number" />
      kg/m3
    </div>
    <div class="row">
      Dynamic viscosity
      <input type="number" />
      kg/ms
    </div>
    <div class="row">
      Pipe roughness
      <input type="number" />
      mm
    </div>
    <div class="row">
      Flowrate
      <input type="number" />
      l/min
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
