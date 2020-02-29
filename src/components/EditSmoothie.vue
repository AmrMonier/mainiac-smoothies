<template>
  <div id="createSmoothie">
        <h2 class="indigo-text center-align">Edit Smoothie</h2>
        <form @submit.prevent="UpdateSmoothie">
        <div class="title field">
            <label for="title">Smoothie name:</label>
            <input type="text" name="title" v-model="smoothie.name">
        </div>
         <div class="center-align ingredients">
            <div v-for="(ingrediet, index) in ingredients" :key="index" class="chip indigo" @click.self="editName(ingrediet)">
                {{ingrediet}} <i class="small material-icons right" @click.prevent="removeItem(ingrediet)">clear</i>
            </div>
        </div>
        <div class="title field">
            <label for="ingredient">Ingredient name:</label>
            <input type="text" name="ingredient" v-model="ingredient" 
            placeholder="enter the ingredient then hit tab to add another" @keydown.tab="addIngrediet">
        </div>
        <p class="red-text center-align" v-if="err">
            {{err}}
        </p>
        <div class="center-align">
            <button type="submit" class="btn pink">Update Smoothie</button>
        </div>
      </form>
  </div>
</template>

<script>
import db_conncetion from "@/firebase/init"
import 'slugify'
import slugify from 'slugify'
export default {
    name: 'EditSmoothie',
    data(){
        return {
            smoothie:{},
            ingredients:[],
            ingredient: null,
            err: null
        }
    },
    methods:{
        UpdateSmoothie(){
            if(this.smoothie.name == null ){
                this.err = 'Name Cn\' be empty'
            }
            else{
                this.smoothie.slug = slugify(this.smoothie.name,{
                    remove: /[!@#`<>$%^&*()_:-;~.]/g,
                    lower: true
                })
                console.log(this.smoothie)
                db_conncetion.collection('smoothies').doc(this.smoothie.id)
                .update(this.smoothie).then(
                    () => this.$router.push({name: 'index'}),
                    err => console.log(err)
                )
            }
        },
        addIngrediet(payload){
            if(this.ingredient !== null){
                this.ingredients.push(this.ingredient)
                this.ingredient = null
                this.smoothie.ingredients = this.ingredients
                this.err = null
            }
            else{
                this.err = 'Ingredient name can\' be empty' 
            }
        },
        editName(name){
            this.ingredients = this.ingredients.filter(i => {
                return i !== name
            })
            this.ingredient = name
        },
        removeItem(name){
            this.ingredients = this.ingredients.filter(i => {
                return i !== name
            })
            this.smoothie.ingredients = this.ingredients
        },
    },
    created(){
        db_conncetion.collection('smoothies').where('slug', '==', this.$route.params.slug)
        .get().then(snapshot => {
            // this.smoothie = data.data(  )
            snapshot.forEach(element => {
            this.smoothie = element.data()
            this.smoothie.id = element.id
            this.ingredients = this.smoothie.ingredients
            });
        })
    }
}
</script>

<style scoped>
    #createSmoothie{
        max-width: 60vw;
        margin: 1em auto;
        padding: 25px
    }
    #createSmoothie form{
        padding: 2em;
        margin: default auto;
    }
    .chip{
        color: #fff
    }
    .small{
        font-size: 20px;
        margin-top: 6px;
        cursor: pointer; 
    }
    .ingredients{
        margin: 1em auto
    }
</style>