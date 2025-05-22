<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <span style="color: rgb(51, 51, 51); caret-color: rgb(51, 51, 51)"
    >交付质量良好，符合交付要求，联调顺利</span
  >
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted } from "vue";
const timer = ref();
// const checkUpdate = async () => {
//   let res = await fetch("/versionData.json", {
//     headers: {
//       "Cache-Control": "no-cache",
//     },
//   }).then((r) => r.json());
//   if (!localStorage.getItem("demo_version")) {
//     localStorage.setItem("demo_version", res.version);
//   } else {
//     console.log(localStorage.getItem("demo_version"), res.version);
//     if (res.version !== localStorage.getItem("demo_version")) {
//       localStorage.setItem("demo_version", res.version);
//       alert("版本有更新");
//       // window.location.reload(true);
//     }
//   }
// };

// onMounted(() => {
//   clearInterval(timer.value);
//   timer.value = setInterval(async () => {
//     checkUpdate();
//   }, 10000);
// });
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
