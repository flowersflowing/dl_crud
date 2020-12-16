<template>
  <div class="home">
    <Inicio/>
    <Creacion/>
    <Listas/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Creacion from '../components/Creacion.vue'
import Listas from '../components/Listas.vue'

export default {
  name: 'Home',
  components: {
    Inicio,
    Creacion,
    Listas
  }
}
</script>
