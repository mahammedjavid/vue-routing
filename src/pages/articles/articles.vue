<template>
    <h1 style="border: 1px solid black;padding: 20px;">Article Component</h1>
<ul>
    <li v-for="article of articleLists" :key="article.id">
        <article-item :article="article"></article-item>
     </li>
</ul>
</template>

<script>
import ArticleItem from './article-item.vue';

export default {
inject : ['articleList'],
components : {
    "article-item" : ArticleItem
},
data() {
    return {
        articleLists : this.articleList


    }
},

}
</script>
