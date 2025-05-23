<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/logo-condominio.png" alt="Logo Condominio" class="logo">
      <h2>Condominio Vista Alegre</h2>
    </div>
    
    <nav class="sidebar-menu">
      <div class="user-info">
        <img src="@/assets/user-avatar.png" alt="Usuario" class="user-avatar">
        <p>Bienvenido, <strong>{{ authStore.user?.name }}</strong></p>
        <p class="user-role">{{ userRoleText }}</p>
      </div>
      
      <ul>
        <li :class="{ active: $route.name === 'dashboard' }">
          <router-link :to="{ name: 'dashboard' }">Inicio</router-link>
        </li>
        <li :class="{ active: $route.name === 'fines' }">
          <router-link :to="{ name: 'fines' }">Multas</router-link>
        </li>
        <li :class="{ active: $route.name === 'payments' }">
          <router-link :to="{ name: 'payments' }">Pagos</router-link>
        </li>
        <li>
          <a href="#">Notificaciones</a>
        </li>
        <li>
          <a href="#">Configuración</a>
        </li>
        <li>
          <a href="#" @click.prevent="logout">Cerrar Sesión</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

const userRoleText = computed(() => {
  const role = authStore.user?.role
  const property = authStore.user?.property
  
  if (role === 'owner') return `Dueño - Propiedad ${property}`
  if (role === 'admin') return 'Administrador'
  if (role === 'management') return 'Personal de Administración'
  return ''
})

const logout = () => {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
}

.sidebar-header {
  text-align: center;
  padding: 0 20px 20px;
  border-bottom: 1px solid #34495e;
}

.sidebar-header .logo {
  width: 60px;
  margin-bottom: 10px;
}

.sidebar-header h2 {
  font-size: 18px;
}

.user-info {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #34495e;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid #3498db;
}

.user-role {
  font-size: 12px;
  color: #bdc3c7;
  margin-top: 5px;
}

.sidebar-menu ul {
  list-style: none;
  padding: 20px 0;
}

.sidebar-menu li {
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.sidebar-menu li:hover {
  background-color: #34495e;
}

.sidebar-menu li.active {
  background-color: #3498db;
}

.sidebar-menu a {
  color: white;
  text-decoration: none;
  display: block;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
</style>