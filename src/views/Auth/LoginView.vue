<template>
  <div class="login-container">
    <header class="login-header">
      <img src="@/assets/logo-condominio.png" alt="Logo Condominio" class="logo">
      <h1>Condominio Vista Alegre</h1>
      <p>Sistema de Gestión de Condominio</p>
    </header>
    
    <LoginForm @submit="handleLogin" />
  </div>
</template>

<script setup>
import LoginForm from '@/components/Auth/LoginForm.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async (credentials) => {
  try {
    // Aquí iría la llamada a tu API
    const mockUser = {
      id: 1,
      name: 'Juan Pérez',
      email: credentials.email,
      role: 'owner',
      property: 'A101'
    }
    
    authStore.login(mockUser, 'mock-token')
    router.push({ name: 'dashboard' })
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header .logo {
  width: 80px;
  margin-bottom: 15px;
}

.login-header h1 {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 5px;
}

.login-header p {
  color: #7f8c8d;
  font-size: 14px;
}
</style>