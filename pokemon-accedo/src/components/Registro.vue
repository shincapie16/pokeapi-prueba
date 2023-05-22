
<template>
    <div class="register">
      <h2>Registrarse</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Correo electrónico" required>
        <input type="password" v-model="password" placeholder="Contraseña" required>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      
      register() {
        axios.post('api/v1/users/', { username: this.username, password: this.password })
          .then(response => {
            console.log(response.data.message);
            // Manejar la respuesta, redireccionar, mostrar mensajes, etc.
          })
          .catch(error => {
            console.error(error.response.data.error);
            // Manejar el error, mostrar mensajes de error, etc.
          });
      }
    }
  };
</script>
