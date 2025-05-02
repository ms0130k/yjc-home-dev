<script setup lang="ts">
interface InfoRow {
  label: string
  value: string
}

interface Props {
  rows: InfoRow[]
}

defineProps<Props>()
</script>

<template>
  <table class="info-table">
    <tbody>
      <tr v-for="row in rows" :key="row.label">
        <th class="info-label">{{ row.label }}</th>
        <td class="info-value">{{ row.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.info-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #e0e4ea;
  border-top: 2px solid #bfc4ce;
}
.info-table th,
.info-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #e0e4ea;
  text-align: left;
}
.info-table th {
  background: #f7f9fc;
  color: #222;
  font-weight: 600;
  width: 120px;
  text-align: center;
}
.info-table td {
  color: #444;
}
.info-table tr:last-child th,
.info-table tr:last-child td {
  border-bottom: none;
}
</style>
