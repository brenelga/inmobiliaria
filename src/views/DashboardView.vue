<template>
  <div class="dashboard-container">
    <Sidebar />
    
    <main class="main-content">
      <Header title="Panel de Control" />
      
      <div class="dashboard-content">
        <div class="dashboard-cards">
          <StatsCard 
            title="Multas Pendientes" 
            :value="2" 
            link="fines" 
          />
          <StatsCard 
            title="Pagos Pendientes" 
            :value="1" 
            link="payments" 
          />
          <StatsCard 
            title="Notificaciones" 
            :value="3" 
            link="#" 
          />
        </div>
        
        <section class="recent-activity">
          <h2>Actividad Reciente</h2>
          <ActivityList :activities="activities" />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Header from '@/components/Dashboard/Header.vue'
import StatsCard from '@/components/Dashboard/StatsCard.vue'
import ActivityList from '@/components/Dashboard/ActivityList.vue'
import { ref } from 'vue'

const activities = ref([
  { date: '15 May 2023', text: 'Nueva multa registrada por ruido excesivo' },
  { date: '10 May 2023', text: 'Pago de mantenimiento realizado' },
  { date: '05 May 2023', text: 'Reunión de condominio programada' }
])
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.recent-activity h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .dashboard-container {
    flex-direction: column;
  }
  
  .dashboard-cards {
    grid-template-columns: 1fr;
  }
}
</style>