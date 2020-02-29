<template>
  <div id="index" class="index container">
    <div class="card" v-for="(smoothie, index) in smoothies" :key="index">
      <div class="card-content">
        <h2 class="card-title indigo-text">{{smoothie.name}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient,index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
          smoothies:[
            {name: 'maddness', slug: 'maddness', ingredients:['choco', 'bananas', 'rice'], id:1},
            {name: 'wegobn', slug: 'wegobn', ingredients:['White choco', 'pinapple', 'meat'], id:2},
            {name: 'henfoyu', slug: 'henfoyu', ingredients:['Marshemelo', 'orange', 'peans'], id:3},
            {name: 'jermasheo', slug: 'jermasheo', ingredients:['Oreo', 'strawbery', 'chicken nuggets'], id:4},
            {name: 'bollans', slug: 'bollans', ingredients:['biscuits', 'apples', 'chicken wings'], id:5},
          ]
        }
    }
}
</script>

<style scoped>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .card{
    margin: 1em;
  }
  .card-title{
    text-align: center
  }
  .ingredients li{
    display: inline-block;
  }
</style>