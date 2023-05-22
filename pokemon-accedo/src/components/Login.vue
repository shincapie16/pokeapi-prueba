<template>

    <div class="login">
        <div class="img-container">
            <img class="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="">
        </div>
        <form @submit.prevent="login">
            <!-- Headings for the form -->
            <div class="headingsContainer">
                <h1>Iniciar Sesión</h1>
                
            </div>

            <!-- Main container for all inputs -->
            <div class="mainContainer">
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <!-- Username -->
                <label for="username">Usuario</label>
                <input type="text" v-model="username" placeholder="Usuario" required>

                

                <!-- Password -->
                <label for="password">Contraseña</label>
                <input type="password" v-model="password" placeholder="Contraseña" required>

                <!-- sub container for the checkbox and forgot password link -->
                


                <!-- Submit button -->
                <button type="submit">Iniciar Sesión</button>

                <!-- Sign up link -->
                <p class="register" >¿No tienes una cuenta?  <a @click="goToRegister()">Registrate</a></p>

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
        password: '',
        errorMessage: null
      };
    },
    methods: {
      
      login() {
        this.errorMessage = null;

        axios.post('api/v1/token/login', { username: this.username, password: this.password })
          .then(response => {
            const token = response.data.auth_token
            this.$store.commit('setToken', token)
            axios.defaults.headers.common['Authorization']= 'Token' + token
            localStorage.setItem("token", token)
            this.$router.push('/')

            console.log(response.data.message);
            // Manejar la respuesta, redireccionar, mostrar mensajes, etc.
          })
          .catch(error => {
            console.error(error);
            this.errorMessage = 'Las credenciales no coinciden.';
            localStorage.setItem('errorMessage', this.errorMessage);
            window.location.reload();
            // Manejar el error, mostrar mensajes de error, etc.
          });
      },
      goToRegister(){
        this.$router.push('register/');
      }
    },
    created() {
        this.errorMessage = localStorage.getItem('errorMessage'); // Recuperar el mensaje de localStorage
        localStorage.removeItem('errorMessage');
        if (this.$store.state.isAuthenticated) {
            this.$router.push('/');
        }
    }
  };
  </script>
  <style lang="scss" scoped>
    @import '../assets/styles/styles.scss';
  * {
    margin: 0;
    }
    .error-message {
        color: red;
        margin-top: 10px;
    }
  </style>