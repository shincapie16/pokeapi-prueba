<template>
    <nav class="navbar">
        <div class="navbar-menu">
            <img class="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt=""/>
            <div v-if="this.$store.state.isAuthenticated">
                <a class="navbar-item" @click="logout">Cerrar Sesión</a>
            </div>
            <div v-else>
                <a class="navbar-item" @click="login">Iniciar sesión</a>
                <a class="navbar-item" @click="register">Registrarse</a>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from 'axios';

export default {
  methods: {
    login(){
        this.$router.push('login/');
      },
      register(){
        this.$router.push('register/');
      },
    logout() {
      // Realizar una petición HTTP para cerrar la sesión en el backend
      axios.post('api/v1/token/logout/')
        .then(() => {

          // Eliminar el token JWT del almacenamiento local (localStorage o sessionStorage)
          localStorage.removeItem('token'); // O sessionStorage.removeItem('token');
          this.$store.commit('removeToken')
          
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
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Acme');
.navbar {
    display: flex;
    justify-content: space-between;
    
    
    background: linear-gradient(to right, #155799, #8b0202);
    top: 0;

    width: 100%;
    
}

.navbar-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  
}

.logo-img {
  max-width: 80px;
  max-height: 80px;
  margin-right: auto;
}

.navbar-item {
  margin: 0px 20px 20px;
  cursor: pointer;
  color: #efefef;
  margin-left: auto;
  font-family: 'Acme', arial;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.navbar-item:hover{
    box-shadow: inset 100px 0 0 0 #155799;
    color: white;
}
  </style>