<template>
  <table class="data-table">
    <thead>
      <tr>
        <th>N°</th>
        <th>Fecha</th>
        <th>Propiedad</th>
        <th>Motivo</th>
        <th>Monto</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="fine in fines" :key="fine.id">
        <td>{{ fine.id }}</td>
        <td>{{ fine.date }}</td>
        <td>{{ fine.property }}</td>
        <td>{{ fine.reason }}</td>
        <td>${{ fine.amount.toFixed(2) }}</td>
        <td>
          <span :class="['status', fine.status]">
            {{ fine.status === 'pending' ? 'Pendiente' : 'Pagada' }}
          </span>
        </td>
        <td>
          <button class="btn-action view">Ver</button>
          <button 
            v-if="fine.status === 'pending'" 
            class="btn-action pay"
            @click="$emit('pay', fine.id)"
          >
            Pagar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  fines: {
    type: Array,
    required: true
  }
})

defineEmits(['pay'])
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.data-table th, .data-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.data-table th {
  background-color: #3498db;
  color: white;
  font-weight: 600;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.status.pending {
  background-color: #f39c12;
  color: white;
}

.status.paid {
  background-color: #2ecc71;
  color: white;
}

.btn-action {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;
}

.btn-action.view {
  background-color: #3498db;
  color: white;
}

.btn-action.pay {
  background-color: #2ecc71;
  color: white;
}

.btn-action:hover {
  opacity: 0.9;
}
</style>