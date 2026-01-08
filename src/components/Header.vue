<template>
  <div class="header">
    <h1 class="heading">Muguet Wen'<span class="sub">Blog</span></h1>
    <!-- <Navigation /> -->
  </div>
</template>

<script setup>
import Navigation from "./Navigation.vue";
</script>

<style scoped>
.header {
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
}
.heading {
  margin: 20px 0;
  cursor: pointer;
  font-size: 2.5rem;
}

.heading .sub {
  font-size: 0.6em; /* 相对于 h1 缩小 */
  font-weight: normal;
  margin-left: 0.25em;
}
</style>
