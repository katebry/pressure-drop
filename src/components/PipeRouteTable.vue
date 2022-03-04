<template>
  <h2>Pipe Table Placeholder...</h2>
  <table id="secondTable">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.id">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="col in columns" :key="col.id">{{ row[col] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "Chandler Bing",
          phone: "305-917-1301",
          profession: "IT Manager",
        },
        {
          id: 2,
          name: "Ross Geller",
          phone: "210-684-8953",
          profession: "Paleontologist",
        },
        {
          id: 3,
          name: "Rachel Green",
          phone: "765-338-0312",
          profession: "Waitress",
        },
        {
          id: 4,
          name: "Monica Geller",
          phone: "714-541-3336",
          profession: "Head Chef",
        },
        {
          id: 5,
          name: "Joey Tribbiani",
          phone: "972-297-6037",
          profession: "Actor",
        },
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
