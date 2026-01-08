<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentPath = ref<string>("");

onMounted(() => {
  console.log("pathname:", window.location.pathname);
  console.log(window.location.pathname);
  currentPath.value = window.location.pathname;
});

const isActive = (path: string) => {
  if (path === "/") {
    return currentPath.value === "/";
  }

  return currentPath.value === path || currentPath.value.startsWith(path + "/");
};
</script>

<template>
  <div>{{ currentPath }}</div>
  <div id="main-menu" class="nav-links">
    <a href="/" :class="{ 'menu-active': isActive('/') }">首页</a>
    <a href="/blog/" :class="{ 'menu-active': isActive('/blog') }">博客</a>
    <a href="/about/" :class="{ 'menu-active': isActive('/about') }">关于</a>
    <!-- <a href="/tags/">标签</a> -->
  </div>
</template>

<style scoped>
.menu {
  background-color: #0d0950;
  border: 1px solid #0d0950;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 10px;
}

.nav-links {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
  position: static;
  margin: 0 auto;
  width: auto;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #0d0950;
  border-bottom: 2px solid transparent; /* 先占位 */
}

.nav-links a:hover {
  border-bottom: 2px solid black;
}

/* .nav-links a:active {
  color: hotpink;
  border-bottom: 2px solid black;
} */

.menu-active {
  border-bottom: 2px solid black;
  /* background-color: #303030; */
}

/* .menu-active a {
  color: #fff;
} */
/* .nav-links a:hover,
.nav-links a:focus {
  background-color: #ff9776;
} */
/* 
:has(.menu[aria-expanded="true"]) .nav-links {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }
  .menu {
    display: none;
  }
} */
</style>
