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
      <button class=" btn-floating btn-large halfway-fab waves-effect waves-light pink" @click="deleteSmoothie(smoothie.id)">
                <i class="material-icons">delete</i>
      </button>
      <router-link :to="{name: 'editSmoothie', params: {slug:smoothie.slug}}" class=" btn-floating btn-large halfway-fab waves-effect waves-light pink left">
        <i class="material-icons">edit</i>
      </router-link>
    </div>   
  </div>
</template>

<script>
import db_connection from '@/firebase/init'
export default {
    name: 'Index',
    data(){
        return {
          smoothies:[]
        }
    },
    methods:{
      deleteSmoothie(id){
        db_connection.collection('smoothies').doc(id).delete().then(
          () => {
            this.smoothies = this.smoothies.filter(s => {
              return s.id !== id
            })
          }
        )
      }
    },
    created(){
      db_connection.collection('smoothies').get().then(
        Snapshot => {
          Snapshot.forEach(doc => {
            let smoothie = doc.data()
            smoothie.id = doc.id
            this.smoothies.push(smoothie)
          });
        }
      );
    }
}
</script>

<style scoped>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .card{
    margin: 1.5em 1em;
  }
  .card-title{
    text-align: center
  }
  .ingredients li{
    display: inline-block;
  }
</style>