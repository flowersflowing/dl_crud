<template>
    <div class="container">
        <h2>Lista de usuarios</h2>
        <b-table striped hover :items="dataUsers"></b-table>
    </div>
</template>

<script>
export default {
    name: 'Listas',
    computed: {
        dataUsers(){
            return this.$store.getters.mostrarUsuarios;
        }
    }
}
</script>