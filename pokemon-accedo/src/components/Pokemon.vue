<template>
    <div class="container">
        <nav class="navbar">
      <div class="navbar-brand">
        
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a v-if="this.$store.state.isAuthenticated" class="navbar-item" @click="logout">Logout</a>
          <div v-else><a class="navbar-item" @click="login">Iniciar sesión</a>
          <a  class="navbar-item" @click="register">Registrarse</a>
        </div>
        </div>
      </div>
    </nav>
      <h1>Pokemon</h1>
      <PokemonSearch
      :apiUrl="apiUrl" 
      @setPokemonUrl="setPokemonUrl" />
      <PokemonList 
        :imageUrl="imageUrl" 
        :apiUrl="apiUrl"
        @setPokemonUrl="setPokemonUrl" />
      
    </div>
  </template>
  
  <script>
    import PokemonSearch from './PokemonSearch.vue';
    import PokemonList from './PokemonList.vue';
    
  
    export default {
      data: () => {
        return {
          imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
          apiUrl: 'https://pokeapi.co/api/v2/pokemon',
          pokemonUrl: '',
          
        }
      },
      components: {
        PokemonSearch,
        PokemonList,
        
      },
      methods: {
        setPokemonUrl(url) {
            const pokemonId = url.split('/').filter(part => !!part).pop();
            this.$router.push('/pokemon/' + pokemonId);
            
        },
        
      }
    }
  </script>
  
  <style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Acme');
  
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      width: calc(100% - 20px);
      min-height: calc(100vh - 20px);
      background: linear-gradient(to right, #155799, #8b0202);
  
      font-family: 'Acme', arial;
      font-size: 1rem;
      font-weight: normal;
    }
  
    h1 { color: #efefef; }
    .navbar {
      background-color: #f5f5f5;
      padding: 10px;
    }
    .navbar-brand h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
    }
    .navbar-menu {
    display: flex;
    justify-content: flex-end;
    }
    .navbar-item {
    margin-left: 10px;
    cursor: pointer;
    }
  </style>