<template>

  <div class="login">
      <div class="img-container">
          <img class="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="">
      </div>
      <form @submit.prevent="register">
          <!-- Headings for the form -->
          <div class="headingsContainer">
              <h1>Registrarse</h1>
          </div>

          <!-- Main container for all inputs -->
          <div class="mainContainer">
              <!-- Username -->
              <label for="username">Usuario</label>
              <input type="text" v-model="username" placeholder="Usuario" required>

              

              <!-- Password -->
              <label for="password">Contraseña</label>
              <input type="password" v-model="password" placeholder="Contraseña" required>

              <!-- sub container for the checkbox and forgot password link -->
              


              <!-- Submit button -->
              <button type="submit">Registrarse</button>

              

          </div>

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
            this.$router.push('/login')
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
<style lang="scss" scoped>
  @import '../assets/styles/styles.scss';
</style>