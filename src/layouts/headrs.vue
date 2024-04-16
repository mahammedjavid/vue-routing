<template>
<div style="margin-top: 20px">
    <router-link to="/users" style="padding: 10px ;text-decoration: none;font-size: 18px;margin-top: 10px;">users</router-link>
    <router-link to="/article" style="padding: 10px;text-decoration: none;font-size: 18px;margin-top: 10px;"    >articles</router-link>
    <router-link to="/goals" style="padding: 10px;text-decoration: none;font-size: 18px;margin-top: 10px;"    >Goals</router-link>

</div>
    <!-- <button @click="moveToArticles">Articles</button> -->
</template>
<script>
    export default{
        methods : {
            moveToArticles(){
                this.$router.push('/article')
            }
        }
    }
</script>
<style>
    a.router-link-active {
        background: blue;
        color: white
    }
</style>