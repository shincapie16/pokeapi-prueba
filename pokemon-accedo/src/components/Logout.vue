<template>
    <div>
      <!-- Otro contenido de tu componente Logout.vue -->
      <button @click="logout">Logout</button>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  methods: {
    logout() {
      // Realizar una petición HTTP para cerrar la sesión en el backend
      axios.post('api/v1/token/logout/')
        .then(() => {

          // Eliminar el token JWT del almacenamiento local (localStorage o sessionStorage)
          localStorage.removeItem('token'); // O sessionStorage.removeItem('token');
          this.$store.commit('removeToken')
          console.log(this.$store.state.isAuthenticated)
          // Redirigir al usuario a la página de inicio de sesión u otra página deseada
          this.$router.push('/'); // Reemplaza '/login' con la ruta deseada
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>