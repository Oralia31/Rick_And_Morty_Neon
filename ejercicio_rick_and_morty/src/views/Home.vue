<template>
<div class="home"> 
 <contenido />
</div>
 
</template>

<script>
  import contenido from '../components/contenidoComponent'

  export default {
    name: 'Home',

    components: {
      contenido,
    },
  }
</script>
<style scoped>
.home{
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/fondo.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;

  background-image:
  linear-gradient(
    rgba(0, 0, 0, 0.342),
    rgba(0, 0, 0, 0.438)
  ), url("../assets/img/fondo.jpg");


}

</style>
