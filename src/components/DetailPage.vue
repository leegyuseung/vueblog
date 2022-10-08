<template>
  <h4>상세페이지입니다.</h4>
  <h5>{{ blog[$route.params.id].title }}</h5>
  <h5>{{ blog[$route.params.id].content }}</h5>
  <router-view></router-view>
</template>

<script>
export default {
  props: {
    blog: Array,
  },
};
</script>

<style></style>
