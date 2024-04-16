<template>
  <div style="margin: 20px">
    Goal title: {{ goal.title }}
    <br />
    Goal description: {{ goal.description }}
    <br />
    Deadline: {{ goal.deadline }}
    <br />
    Status: {{ goal.status }}
  </div>

  <router-link to="/goals/2">Gaol 2</router-link>
</template>

<script>
export default {
  inject: ["goals"],
  data() {
    return {
      goal: "",
    };
  },
  watch: {
    $route(newValue) {
      this.getGoal(newValue);
    },
  },
  mounted() {
    this.getGoal(this.$route);
  },
  methods: {
    getGoal(route) {
      const goalID = route.params.id;
      this.goal = this.goals.find((goal) => goal.id == goalID);
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
};
</script>
