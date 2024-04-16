<template>
  <div>
    <router-link :to="moveToArticle"> {{ article.title }}</router-link>
  </div>
</template>
<script>
export default {
  props: ["article"],
  computed: {
    moveToArticle() {
    //     this.$router.push({
    //     path: `/article`,
    //     params: {
    //       id: this.article.id,
    //     },
    //     query: {
    //       test: "test",
    //     },
    //   })
        return `/article/${this.article.id}`
    //   return {
    //     name: `named-article`,
    //     params: {
    //       id: this.article.id,
    //     },
    //     query: {
    //       test: "test",
    //     },
    //   };
    },
  },
  mounted(){
    console.log(this.article)
  }
};
</script>
