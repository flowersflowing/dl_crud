<template>
  <div class="container my-5">
    <h2>Regístrate</h2>
    <b-form @submit.prevent="createUser" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Correo electrónico:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="usuario@hola.es"></b-form-input>
      </b-form-group>
      <!-- <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" type="text" required placeholder="Pedro Pascal"></b-form-input>
      </b-form-group> -->
      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Ingrese contraseña"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Crear usuario</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  // import { Message } from 'element-ui';

  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      createUser() {
        if(this.form.email && this.form.password && this.form.password.length >= 6) {
          console.log('Está entrando');
          firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(resp => {
            console.log(resp);
            this.$router.push('/home');
          })
          .catch(error => {
            if(error.code == 'auth/email-already-in-use') {
              console.log('el correo ya existe');
              this.errors(error);           
            } else if(error.code == 'auth/invalid-email') {
              console.log('correo inválido');
              this.errors(error);
            } else if(error.code == 'auth/weak-password') {
              console.log('contraseña débil, debe tener más de seis caracteres');
              this.errors(error);            
            } else {
              console.log('operación no permitida');
              this.errors(error);          
            }
          })
        } else {
          console.log('error');
        }
      },
      errors(error) {
        this.$notify.error({
          title: 'Error',
          message: `${error.message}`
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>