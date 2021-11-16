<template>
<div class="container"> 
            <div class="encabezado">
                 <h1 class="texto">Personajes de Rick y Morty</h1>
            </div>

            <div class="filtro">
               <b-form-input id="busqueda" v-model="busqueda" placeholder="Buscar..." class="busqueda" v-on:keyup="filterNombres()"></b-form-input>
            </div>

            <!-- <table id="tblPersonajes" class="table table-striped" style="width:100%">
                        <tbody>
                          <tr v-for="(personajes, index) in listaPersonajes" :key="index">
                          
                              <td>{{personajes.id}}</td>
                              <td><img :src="personajes.image" alt=""></td>
                              <td>{{personajes.name}}</td>
                          </tr>
                          
                        </tbody>
                    </table> -->



            <div class="cards">
                  <b-card  v-for="(personajes, index) in listaPersonajes.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="index"
                          style="max-width: 20rem;"
                          class="text-center mb-4"
                          :footer="personajes.name">
                
                      <b-card-title id="circulo"> 
                          {{personajes.id}}
                      </b-card-title>
                
                        
                      <b-card-body id="cuadrado"> 
                          <div><img :src="personajes.image" alt=""></div> 
                      </b-card-body>
                        
                  </b-card>
            </div>


         <!--   <nav class="pagination">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" v-on:click="changePage (page - 1)">Anterior</a></li>
                  <li class="page-item"> <a class="page-link">{{page}}</a></li>
                <li class="page-item"><a class="page-link" v-on:click="changePage (page + 1)">Siguiente</a></li>
              </ul>
            </nav> -->

            <nav class="pagination">
               <b-pagination v-model="currentPage" :total-rows="listaPersonajes.length" :per-page="perPage" prev-text="Anterior" next-text="Siguiente"></b-pagination>
            </nav>
                       
</div>
</template>


<script>
import {Global} from '@/Global';
import axios from 'axios'; 
// import '../assets/js/filtrado';

export default {
  name: "contenidoComponent",
  components: {
    
   },

  data () {
      return {
           busqueda: null,
           listaPersonajes: [],
           listaPersonajesAux:[],
           nombrePersonaje: null,
           currentPage: 1,
           perPage:2
      }
    
    },
   mounted:function() {
      this.obtenerPersonajes();
    },
   computed: {
     
    },
  
  methods: {
      obtenerPersonajes(){
        axios.get(Global.url + '/character').then( res => {
          if (res.status == 200){
            this.listaPersonajes = res.data.results;
            this.listaPersonajesAux = res.data.results;
            } 
           
          }) 
          .catch(error => {
             console.log(error);
          })
      },

      filterNombres (){
        this.listaPersonajes = this.listaPersonajesAux;
            this.listaPersonajes = this.listaPersonajes.filter(
              (nombre) => {   
                      return nombre.name.toUpperCase().includes(this.busqueda.toUpperCase())
                })  
      
      },

    }


  }

</script>

<style scoped>
.texto{
   color: rgb(255, 255, 255);
}


@keyframes pulsate {
    
  100% {
    text-shadow:
    0 0 7px rgba(255, 255, 255, 0.705),
    0 0 10px rgba(255, 255, 255, 0.74),
    0 0 21px rgba(255, 255, 255, 0.651),
    0 0 42px #bc13fe,
    0 0 82px #bc13fe,
    0 0 92px #bc13fe,
    0 0 102px #bc13fe,
    0 0 151px #bc13fe;
  }
  
  0% {
    text-shadow:
    0 0 4px rgb(253, 170, 232),
    0 0 10px rgb(241, 166, 235),
    0 0 18px rgb(250, 190, 213),
    0 0 38px #f09,
    0 0 73px #f09,
    0 0 80px #f09,
    0 0 94px #f09,
    0 0 140px #f09;
}}


h1{
  font-family: "Vibur", sans-serif;
  font-weight: 400;
  line-height: 1;
}

h1 {
    font-size: 5.2rem;
    animation: pulsate 0.11s ease-in-out infinite alternate;     
}

img {
    width: 250px;
}

.encabezado{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0 0;
}

.filtro {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

input#busqueda {
    width: 50%;
}

.card.text-center.mb-4 {
  margin: 20px;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card-footer {
    font-family: cursive;
    text-transform: uppercase;
    font-size: 17px;
    color: white;
    font-weight: bold;
    background-color: rgb(191 78 179);
    border: 2px solid rgb(191 78 179);
}

#circulo{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 8px;
    background: rgb(251 235 56);
    border: 2px solid rgb(251 235 56);
    color: rgb(174 53 238);
    text-align: center;
    margin-bottom: 15px;
    box-shadow:2px 2px 5px 0px rgba(75, 129, 143, 0.75);
}

#cuadrado{
    width: 270px;
    padding: 8px;
    background: rgb(174 53 238);
}
.pagination {
  justify-content: center;
}


</style>
