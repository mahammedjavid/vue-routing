<template>
  <div style="margin: 20px">
    title : {{ article.title }} author : {{ article.author }} content :
    {{ article.content }} tags : {{ article?.tags?.join(", ") }}
  </div>

  <router-link to="/article/2">Article 2</router-link>
</template>

<script>
export default {
  inject: ["articleList"],
  props: ["id"],
  data() {
    return {
      article: "",
    };
  },
  watch: {
    id(newValue) {
      this.getArticle(newValue);
    },
  },
  created() {
    this.getArticle(this.id);
  },
  methods: {
    getArticle(routeId) {
      const articleId = routeId;
      this.article = this.articleList.find((res) => res.id == articleId);
    },
  },
};
</script>
