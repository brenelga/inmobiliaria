<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="close-modal" @click="closeModal">&times;</span>
      <h2>Registrar Nueva Multa</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="fine-property">Propiedad</label>
          <select id="fine-property" v-model="form.property" required>
            <option value="">Seleccione propiedad</option>
            <option value="A101">A101 - Juan Pérez</option>
            <option value="A102">A102 - María Gómez</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="fine-reason">Motivo</label>
          <select id="fine-reason" v-model="form.reason" required>
            <option value="">Seleccione motivo</option>
            <option value="Ruido excesivo">Ruido excesivo</option>
            <option value="Estacionamiento indebido">Estacionamiento indebido</option>
            <option value="Mal uso de áreas comunes">Mal uso de áreas comunes</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="fine-amount">Monto ($)</label>
          <input 
            type="number" 
            id="fine-amount" 
            v-model="form.amount"
            min="0" 
            step="0.01" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="fine-description">Descripción detallada</label>
          <textarea 
            id="fine-description" 
            v-model="form.description"
            rows="4" 
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="fine-evidence">Evidencia (opcional)</label>
          <input 
            type="file" 
            id="fine-evidence"
            @change="handleFileUpload"
          >
        </div>
        
        <button type="submit" class="btn-submit">Registrar Multa</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'submit'])

const form = ref({
  property: '',
  reason: '',
  amount: 0,
  description: '',
  evidence: null
})

const handleFileUpload = (event) => {
  form.value.evidence = event.target.files[0]
}

const submitForm = () => {
  emit('submit', form.value)
  closeModal()
}

const closeModal = () => {
  emit('close')
}
</script>