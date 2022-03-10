<template>
  <h2>Pipe Table Placeholder...</h2>
  <table id="secondTable">
    <thead>
      <tr>
        <th v-for="col in columnTitles" :key="col.heading">
          {{ col.heading }}
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td><input class='item_no_input' type='number' id='item_no1' name='item_no1' value=1></td>
      <td><select name='item_type1' id='item_type1'>
        <option value='Pipe'>Pipe</option>
        <option value='Ball Valve'>Ball Valve</option>
        <option value='Globe Valve'>Globe Valve</option>
        <option value='Bend'>Bend</option>
        <option value='Tee'>Tee</option>
      </select></td>
      <td><input class='inputs' type='number' id='diameter1' name='diameter1' value=0.025>mm</td>
      <td><input class='inputs' type='number' id='pipe_length1' name='pipe_length1' value=1>m</td>
      <td><input class='NAfield' type='number' id='K_factor1' name='K_factor1' readonly></td>
      <td><input class='inputs' type='number' id='pdrop1' name='pdrop1' value=25>Pa</td>
      <td><input class='outputs' type='number' id='pdrop_total1' name='pdrop_total1' readonly/>Pa</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      columnTitles: [
        { heading: "Item No." },
        { heading: "Item Type" },
        { heading: "Diameter" },
        { heading: "Pipe Length" },
        { heading: "Fitting K Factor" },
        { heading: "Item Pressure Drop" },
        { heading: "Pressure Drop Total" },
      ],
    };
  },
  computed: {
    columns() {
      if (this.rows.length === 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    },
  },
};
</script>

<style scoped></style>
