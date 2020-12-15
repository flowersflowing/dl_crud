<template>
  <div class="container my-5">
    <h2>Login</h2>
    <b-form @submit.prevent="login" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Correo electrónico:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="usuario@hola.es"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Ingrese contraseña"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Entrar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  // import { message } from 'element-ui';

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
    // methods: {
    //   login() {
    //     if(this.form.email && this.form.password && this.form.password.length >= 6) {
    //       console.log('Está entrando');
    //       firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
    //       .then(resp => {
    //         console.log(resp.user.email);
    //         this.$router.push('/home');
    //       })
    //       .catch(error => {
    //         if(error.code == 'auth/wrong-password') {
    //           // console.log('contraseña inválida');
    //           this.errors(error);           
    //         } else if(error.code == 'auth/invalid-email') {
    //           // console.log('correo inválido');
    //           this.errors(error);
    //         } else if(error.code == 'auth/user-disabled') {
    //           // console.log('usuario no identificado');
    //           this.errors(error);    
    //         } else {
    //           console.log('error de ingreso');
    //           this.errors(error);
    //           // this.$router.push('/register');           
    //         }
    //       })
    //     } else {
    //       console.log('error');
    //     }
    //   }
    // },
    methods: {
      login() {
        firebase.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(acept => {
          console.log('Entra', acept);
          this.$router.push('/home');
        },
        reject => {
          this.$message({
            showClose: true,
            message: reject.message,
            type: 'error'
          });
        });
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
    },
    errors(error) {
      this.$notify.error({
        title: 'Error',
        message: `${error.message}`
      });
    }      
   },
  }
</script>