<template>
  <div id="app">
    
      <Navbar/>
      <main>
        <router-view/>
      </main>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  main {
    flex: 1 0 auto;
  }
</style>
