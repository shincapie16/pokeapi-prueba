<template>

  <div class="login">
      <div class="img-container">
          <img class="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="">
      </div>
      <form @submit.prevent="register">
          
          <div class="headingsContainer">
              <h1>Registro</h1>
          </div>

          
          <div class="mainContainer">
              <!-- Username -->
              <label for="email">Correo Electrónico</label>
              <input type="email" v-model="email" placeholder="Correo Electrónico" required>

              <label for="username">Usuario</label>
              <input type="text" v-model="username" placeholder="Usuario" required>

              <label for="password">Contraseña</label>
              <input type="password" v-model="password" placeholder="Contraseña" required>
   
              <button type="submit">Registrarse</button>
              <button class="gotoMenu-btn" @click="goToMenu">Regresar</button>
              

          </div>

      </form>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        username: '',
        password: '',
      };
    },
    methods: {
      
      register() {
        axios.post('api/v1/users/', { email: this.email, username: this.username, password: this.password })
          .then(response => {
            console.log(response.data.message);
            this.login();
            
          })
          .catch(error => {
            console.error(error.response.data.error);
            
          });
      },
      login() {
        

        axios.post('api/v1/token/login', { username: this.username, password: this.password })
          .then(response => {
            const token = response.data.auth_token
            this.$store.commit('setToken', token)
            axios.defaults.headers.common['Authorization']= 'Token' + token
            localStorage.setItem("token", token)
            
            this.$router.push('/')
            window.location.reload();
            
            // Manejar la respuesta, redireccionar, mostrar mensajes, etc.
          })
          .catch(error => {
            console.error(error);
            
            window.location.reload();
            // Manejar el error, mostrar mensajes de error, etc.
          });
      },
      goToMenu(){
            this.$router.push('/');
        },
    },
    beforeCreate() {
        if (this.$store.state.isAuthenticated) {
            this.$router.push('/');
        }
    }
  };
</script>
<style lang="scss" scoped>
  @import '../assets/styles/styles.scss';
</style>