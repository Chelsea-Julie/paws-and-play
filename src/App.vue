<template>
  <div class="wrapper">
    <NavBar /> 
    <main class="container-fluid">
      <router-view/>
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue';

export default{
  name: 'AppView',
  components: {
    NavBar,FooterComp
  }
}
</script>

<style>

main{
  padding-inline: 0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
