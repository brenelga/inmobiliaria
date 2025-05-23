<template>
  <div class="dashboard-container">
    <Sidebar />
    
    <main class="main-content">
      <Header title="Registro de Multas">
        <button class="btn-add" @click="showModal = true">Nueva Multa</button>
      </Header>
      
      <div class="filters">
        <select v-model="filter">
          <option value="all">Todas las multas</option>
          <option value="pending">Pendientes</option>
          <option value="paid">Pagadas</option>
        </select>
        <input type="text" v-model="search" placeholder="Buscar multa...">
      </div>
      
      <FinesTable 
        :fines="filteredFines" 
        @pay="handlePay"
      />
      
      <FineModal 
        v-if="showModal" 
        @close="showModal = false" 
        @submit="handleAddFine"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Header from '@/components/Dashboard/Header.vue'
import FinesTable from '@/components/Fines/FinesTable.vue'
import FineModal from '@/components/Fines/FineModal.vue'

const fines = ref([
  { id: 125, date: '15/05/2023', property: 'A101', reason: 'Ruido excesivo después de horas permitidas', amount: 50, status: 'pending' },
  { id: 124, date: '10/05/2023', property: 'A101', reason: 'Estacionamiento en área no permitida', amount: 30, status: 'paid' }
])

const filter = ref('all')
const search = ref('')
const showModal = ref(false)

const filteredFines = computed(() => {
  let result = fines.value
  
  // Aplicar filtro por estado
  if (filter.value !== 'all') {
    result = result.filter(fine => fine.status === filter.value)
  }
  
  // Aplicar búsqueda
  if (search.value) {
    const searchTerm = search.value.toLowerCase()
    result = result.filter(fine => 
      fine.property.toLowerCase().includes(searchTerm) || 
      fine.reason.toLowerCase().includes(searchTerm)
    )
  }
  
  return result
})

const handleAddFine = (newFine) => {
  fines.value.unshift({
    id: fines.value.length + 1,
    date: new Date().toLocaleDateString(),
    status: 'pending',
    ...newFine
  })
  showModal.value = false
}

const handlePay = (fineId) => {
  const fineIndex = fines.value.findIndex(f => f.id === fineId)
  if (fineIndex !== -1) {
    fines.value[fineIndex].status = 'paid'
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filters select, .filters input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.filters input {
  width: 250px;
}

.btn-add {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.btn-add:hover {
  background-color: #27ae60;
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
    gap: 10px;
  }
  
  .filters input {
    width: 100%;
  }
}
</style>