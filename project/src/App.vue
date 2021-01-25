<template>
  <div id="app">
    <div class="container">
        <h2> Contrôle de la qualité de l'air</h2> 
        <div class="row">
          <div class="col-sm-4" v-for="city of cities" :key="city.index">
              <City :city="city" />
          </div>
        </div>
          
    </div>
  </div>
</template>

<script>
import City from '@/components/City'
export default {
  name: 'App',
  components:{
    City
  },
  data() {
    return {
      cities: [{name:"Lyon", iqa:30},
              {name:"Paris", iqa:21},
              {name:"Orléans", iqa:12}]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
