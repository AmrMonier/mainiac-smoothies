<template>
<nav class="nav-extended indigo darken-2">
        <div class="nav-content">
        <router-link :to="{name: 'index'}">
            <span class="nav-title">Maniac Smoothies</span>
        </router-link>
        <a class="btn-floating btn-large halfway-fab waves-effect waves-light pink">
            <router-link :to="{name: 'createSmoothie'}">
                <i class="material-icons">add</i>
            </router-link>
        </a>
    </div>
</nav>      
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    nav{
        padding-left: 1em 
    }
</style>