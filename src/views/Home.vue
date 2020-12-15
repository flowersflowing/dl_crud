<template>
  <div class="home">
    <Inicio/>
    <Creacion/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Creacion from '../components/Creacion.vue'

export default {
  name: 'Home',
  components: {
    Inicio,
    Creacion
  }
}
</script>
