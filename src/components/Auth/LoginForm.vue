<template>
  <form class="login-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input 
        type="email" 
        id="email" 
        v-model="email"
        placeholder="Ingrese su correo" 
        required
      >
    </div>
    
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input 
        type="password" 
        id="password" 
        v-model="password"
        placeholder="Ingrese su contraseña" 
        required
      >
    </div>
    
    <button type="submit" class="btn-login">Iniciar Sesión</button>
    
    <div class="form-footer">
      <router-link to="#">¿Olvidaste tu contraseña?</router-link>
      <router-link :to="{ name: 'register' }">Registrarse</router-link>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const emit = defineEmits(['submit'])

const submitForm = () => {
  emit('submit', {
    email: email.value,
    password: password.value
  })
}
</script>

<style scoped>
.login-form .form-group {
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

.login-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background-color: #2980b9;
}

.form-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.form-footer a {
  color: #3498db;
  text-decoration: none;
  font-size: 14px;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>