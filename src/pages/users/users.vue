<template>
        <h1 style="border: 1px solid black;padding: 20px;">users Component</h1>
    <ul>
        <li v-for="user of userss" :key="user.id" @click="movetoSingleUser(user)">{{ user.name }}</li>
    </ul>
</template>

<script>
export default {
    inject : ['users'],
    data() {
        return {
            userss : this.users


        }
    },
    methods : {
        movetoSingleUser(user){
            this.$router.push(`/users/${user.id}`)
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('beforeRouteEnter')
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave')
        next()
    }
}
</script>
