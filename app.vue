<script setup>
function handleClick() {
  window.alert("Yes!")
}
</script>

<template>
  <div>
    <h1>Hello Nuxt Fonts!</h1>
    <button @click="handleClick">Does JS work?</button>
  </div>
</template>

<style scoped>
div {
  background: lightblue;
}

h1 {
  font-size: 3rem;
  font-family: 'Sixtyfour Convergence', serif;
}
</style>
