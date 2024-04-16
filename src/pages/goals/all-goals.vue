<template>
  <div>
    <h1 style="border: 1px solid black; padding: 20px">Goals Component</h1>
    <ul>
      <li v-for="goal of goalss" :key="goal.id" @click="moveToSingleGoal(goal)">
        {{ goal.title }}
      </li>
    </ul>

    <div>
      <h4 style="border: 1px solid black; padding: 20px">
        Here is the details
      </h4>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["goals"],
  data() {
    return {
      goalss: this.goals,
    };
  },
  methods: {
    moveToSingleGoal(goal) {
      this.$router.push(`/goals/${goal.id}`);
    },
  },
};
</script>
