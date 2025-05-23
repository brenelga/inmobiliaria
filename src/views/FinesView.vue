<script setup>
import { api } from '@/utils/index.js';
</script>

export default (
  data() {
    return {
      multas: []
      departamentoId: '001'
    }
  },
  mounted(){
    this.cargarMultas()
    this.interval = setInterval(this.cargarMultas, 5000)
  },
  before
)