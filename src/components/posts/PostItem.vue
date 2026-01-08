<script setup lang="ts">
// import { useRoute, useRouter } from 'vue-router'

// const route = useRoute();
// const router = useRouter();

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "标题",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  date: {
    type: String,
    required: true,
    default: "日期",
  },
});

// function goToPost() {
//   router.push(`/post/${props.title}`);
// }
</script>

<template>
  <div class="item">
    <div class="title-date">
      <a :href="url" class="title">{{ title }}</a>
      <p class="date">{{ date }}</p>
    </div>
    <!-- <p class="description">{{ description }}</p>   tag标注-->
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  text-align: left;
  /* outline: 1px solid; */
  height: 60px;
  margin-bottom: 24px;
}
.title-date {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  height: 28px;
}
.title {
  font-family: "Libre Caslon text", sans-serif;
  font-optical-sizing: auto;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  cursor: pointer;
  color: #303030;
  text-decoration: none;
  height: 28px;
}
.title:hover {
  text-decoration: underline;
}
.description {
  font-size: 0.9em;
  /* margin-left: 1em; */
  color: gray;
  font-weight: 600;
}
.date {
  margin-left: auto;
  font-size: 0.8em;
  color: gray;
  /* right: 0;
  font-size: 12px;
  margin-bottom: 5px;  */
}
</style>
