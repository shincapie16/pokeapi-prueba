<template>
    <Navbar></Navbar>
    <div class="container">
    
      <h1>¡Tú Pokedex!</h1>
      <p>Hecho por: Santiago Hincapié Arango</p>
      <p> Prueba Accedo</p>
      <PokemonList 
        :imageUrl="imageUrl" 
        :apiUrl="apiUrl"
        @setPokemonUrl="setPokemonUrl" />
      
    </div>
  </template>
  
  <script>
    import PokemonList from './PokemonList.vue';
    import Navbar from './Navbar.vue'
    
  
    export default {
      data: () => {
        return {
          imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
          apiUrl: 'https://pokeapi.co/api/v2/pokemon',
          pokemonUrl: '',
          
        }
      },
      components: {
        PokemonList,
        Navbar,
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
p  { 
    color: #efefef; 
    margin-top: -20px;
    
}

  </style>