<script setup lang="ts">
import PostItem from "./PostItem.vue";
import { ref } from "vue";

interface PostInfo {
  title: string;
  subtitle: string;
  date: string;
}

const postInfo = ref<PostInfo[]>([
  {
    title: "Darwin the Man of His Times",
    subtitle: "In His Own Words (Episode 3)",
    date: "January 1, 2026",
  },
  {
    title: "Darwin the Voyager",
    subtitle: "In His Own Words (Episode 2)",
    date: "December 25, 2025",
  },
  {
    title: "Darwin the Fun-Loving Young Fellow",
    subtitle: "In His Own Words (Episode 1)",
    date: "December 18, 2025",
  },
  {
    title: "年后",
    subtitle: "早上号",
    date: "2026-01-06",
  },
  {
    title: "123",
    subtitle: "5",
    date: "1",
  },
]);
</script>

<template>
  <div class="List">
    <PostItem
      v-for="(item, index) in postInfo"
      :title="item.title"
      :subtitle="item.subtitle"
      :date="item.date"
    />
  </div>
</template>

<style scoped>
.List {
  max-width: 800px;
  outline: 1px solid;
}
</style>
