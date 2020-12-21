import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    mostrarUsuarios(state) {
      return state.usuarios;
    }
  },
  mutations: {
    cambiarUsuarios(state, arreglo) {
      state.usuarios = arreglo;
    }
  },
  actions: {
    traerData({commit}){
      db.collection("usuarios").get().then(resp => {
        let arreglo = [];
        resp.forEach(el => {
          arreglo.push({
            name: el.data().name,
            lastname: el.data().lastname,
            email: el.data().email,
            id: el.id
          });
        });
        commit('cambiarUsuarios', arreglo);
      });
    },
    agregarUsuario(context, data) {
      db.collection("usuarios").add({
        name: data.name,
        lastname: data.lastname,
        email: data.email
      }).then(resp => {
        console.log(resp);
      })
    },
    eliminar(context, id) {
      db.collection('usuarios').doc(id).delete().then(() => {
        console.log('eliminado');
      }).catch(error => {
        console.log(error);
      });
    }
  }
})
