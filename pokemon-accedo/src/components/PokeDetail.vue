<template>
    <div class="detail">
      
      <div class="detail-view">
          
        <div v-if="pokemon" class="image">
          <img :src="imageUrl + pokemon.id + '.png'" alt="">
        </div>
        <div v-if="pokemon" class="data">
          <h2>{{ pokemon.name }}</h2>
          <div class="property">
            <div class="left">Experiencia</div>
            <div class="right">{{ pokemon.base_experience }} XP</div>
          </div>
          <div class="property">
            <div class="left">Altura</div>
            <div class="right">{{ pokemon.height / 10 }} m</div>
          </div>
          <div class="property">
            <div class="left">Peso</div>
            <div class="right">{{ pokemon.weight / 10 }} kg</div>
          </div>
          <h3>Tipos</h3>
          <div class="types">
            <div class="type" 
              v-for="(value, index) in pokemon.types"
              :key="'value'+index">
              {{ value.type.name }}
            </div>
          </div>
          <h3>Habilidades</h3>
          <div class="abilities">
            <div class="ability" 
              v-for="(value, index) in pokemon.abilities"
              :key="'value'+index">
              {{ value.ability.name }}
            </div>
          </div>
        </div>
        <h2 v-else>The pokemon was not found</h2>
        <button class="close" @click="goToMenu">Regresar</button> 
      </div>

    </div>
  </template>
<script>
export default {
    data() {
        return {
            pokemon: {},
            imageUrl: '',
        };
    },
    methods: {
        fetchData() {
          let req = new Request(this.pokemonUrl);
          fetch(req)
            .then((resp) => {
              if(resp.status === 200)
                return resp.json();
            })
            .then((data) => {
              this.pokemon = data;
              this.show = true;
              this.imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
              
            })
            .catch((error) => {
              console.log(error);
            })
        },
        goToMenu(){
            this.$router.push('/');
        }
    },
    created() {
        
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id;
        if (!this.$store.state.isAuthenticated) {
            this.$router.push('/login');
        }
        this.pokemonUrl = pokemonUrl;
        this.fetchData();
        
    }
};
</script>
<style lang="scss" scoped>
    .detail {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      padding: 90px 10px 10px;
      width: calc(100% - 20px);
      height: calc(100vh - 20px);
      background: linear-gradient(to right, #155799, #8b0202);
  
      .detail-view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 100%;
        max-width: 510px;
        padding: 50px 0 0;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      
        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -60px;
          width: 120px;
          height: 120px;
          background-color: #333;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,.2),
                      0 10px 10px rgba(0,0,0,.2);
        }
  
        h2 {
          text-transform: capitalize;
        }
  
        .data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          width: 100%;
          margin-bottom: 40px;
  
          .property {
            width: 90%;
            max-width: 400px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
  
            .left { float: left; }
            .right { float: right; }
          }
  
          h3 {
            width: 90%;
            max-width: 400px;
            border-bottom: 1px solid #ccc;
          }
  
          .types, .abilities {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 90%;
            max-width: 400px;
  
            .type, .ability {
              margin: 0 10px 10px 0;
              padding: 5px 10px;
              border-radius: 20px;
              color: #fff;
              font-size: 1rem;
              letter-spacing: 2px;
              text-transform: capitalize;
              word-wrap: none;
              word-break: keep-all;
            }
  
            .type { background-color: #0A2E50; }
            .ability { background-color: #8b0202; }
          }
        }
  
        .close {
          outline: none;
          border: none;
          border-radius: 5px;
          background-color: #155799;
          color: #efefef;
          padding: 10px 20px;
          margin-bottom: 20px;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .close:hover{
            background-color: #8b0202;
        }
      }
  
      i {
        font-size: 2rem;
        color: #efefef;
      }
    }
  </style>