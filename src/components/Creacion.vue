<template>
  <div class="container my-5">
    <h2>Creación de usuarios</h2>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" placeholder="Mikiso" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Apellido" label-for="input-2">
        <b-form-input id="input-2" v-model="form.lastname" placeholder="Gatito" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Correo electrónico:" label-for="input-3" description="We'll never share your email with anyone else.">
        <b-form-input id="input-3" v-model="form.email" type="email" placeholder="Ingresa correo" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Creacion',
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                email: ''
            },
            show: true
        }
    },
    methods: {
        
    },
}
</script>