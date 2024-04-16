
<template>
  <div>Hello World</div>
  <the-headers></the-headers>
  <router-view></router-view>

  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>
<script>
import headrs from './layouts/headrs.vue';
  export default{
    components : {
      "the-headers" : headrs
    },
    provide(){
      return {
        users : this.users,
        articleList : this.articleList,
        goals : this.goals
      }
    },
    data(){
      return {
        users : [
                {
                    id: 1,
                    name: "Alice",
                    age: 25,
                    email: "alice@example.com",
                    isAdmin: false
                },
                {
                    id: 2,
                    name: "Bob",
                    age: 30,
                    email: "bob@example.com",
                    isAdmin: true
                },
                {
                    id: 3,
                    name: "Charlie",
                    age: 22,
                    email: "charlie@example.com",
                    isAdmin: false
                },
                {
                    id: 4,
                    name: "David",
                    age: 28,
                    email: "david@example.com",
                    isAdmin: true
                }
            ],
            articleList : [
  {
    id: '1kjaskjdkasjdkajsdkjaskdjk',
    title: "Introduction to JavaScript",
    author: "John Doe",
    content: "JavaScript is a programming language...",
    tags: ["JavaScript", "Programming", "Web Development"]
  },
  {
    id: 2,
    title: "Getting Started with React",
    author: "Jane Smith",
    content: "React is a JavaScript library for building user interfaces...",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 3,
    title: "Node.js Basics",
    author: "Alice Johnson",
    content: "Node.js is an open-source, cross-platform JavaScript runtime...",
    tags: ["Node.js", "JavaScript", "Backend"]
  },
  {
    id: 4,
    title: "CSS Layout Techniques",
    author: "Bob Williams",
    content: "CSS offers various layout techniques to position elements...",
    tags: ["CSS", "Web Development", "Styling"]
  }
],
goals : [
  {
    id: 1,
    title: "Learn Vue.js",
    description: "Master the fundamentals of Vue.js framework.",
    deadline: "2024-06-30",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Build a Todo App",
    description: "Create a todo application using Vue.js and Vuex.",
    deadline: "2024-07-15",
    status: "Not Started"
  },
  {
    id: 3,
    title: "Write Blog Post",
    description: "Write a blog post about Vue.js best practices.",
    deadline: "2024-07-05",
    status: "Completed"
  },
  {
    id: 4,
    title: "Attend VueConf",
    description: "Attend the Vue.js conference to learn from experts.",
    deadline: "2024-08-20",
    status: "In Progress"
  }
]


      }
    }
  }
</script>
