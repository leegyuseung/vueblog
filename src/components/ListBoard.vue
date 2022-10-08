<template>
  <div>
    <h4 @click="$router.push('/detail/0')">{{ blog[0].title }}</h4>
    <p>{{ blog[0].content }}</p>
    <p>{{ blog[0].date }}</p>
  </div>
  <div>
    <h4>{{ blog[1].title }}</h4>
    <p>{{ blog[1].content }}</p>
    <p>{{ blog[1].date }}</p>
  </div>
  <div>
    <h4>{{ blog[2].title }}</h4>
    <p>{{ blog[2].content }}</p>
    <p>{{ blog[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: "ListBoard",
  props: {
    blog: Array,
  },
};
</script>

<style></style>
