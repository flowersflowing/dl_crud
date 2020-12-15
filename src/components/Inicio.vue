<template>
  <div class="inicio container text-center mt-5">
    <b-button size="lg" variant="outline-dark" @click="logout">Logout</b-button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Inicio',
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/login');
      }).catch((error) => {
        console.error(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
