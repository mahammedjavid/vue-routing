<template>
   <div style="margin: 20px">
    User name : {{ user.name }}
    User age : {{ user.age }}
    User email : {{ user.email }}
   </div>

   <router-link to="/users/2">Team 2</router-link>
</template>

<script>
export default {
    inject : ['users'],
    data(){
        return {
            user : ''
        }
    },
    watch : {
        $route(newValue){
            this.getUser(newValue)
        }
    },
    mounted(){
        this.getUser(this.$route)
    },
    methods : {
        getUser(route){
        const userID = route.params.id
        this.user = this.users.find((res)=>res.id == userID)
        }
    }
}
</script>