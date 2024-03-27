<template>
  <router-view/>
</template>

<script setup>

</script>

<style lang="css">
@import './assets/font.css';

.font-beauty {
  font-family: "Beautique Display";
}

.bg-linear-white {
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

.hidden-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>