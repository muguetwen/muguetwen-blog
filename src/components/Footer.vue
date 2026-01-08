<template>
  <div class="footer">
    <p>
      &copy;2026
      <a href="/about" class="underline">Muguet Wen</a>'s Blog
    </p>
    <p>
      Powered by <a href="https://astro.build/" class="underline">Astro</a> &
      <a href="https://vuejs.org/" class="underline">Vue</a>
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  border-top: 1px solid gray;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 0;
  font-weight: 600;
  color: gray;
}
.underline {
  text-decoration: underline;
}
p {
  line-height: 0.5;
}
</style>
