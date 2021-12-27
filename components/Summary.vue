<template>
  <div class="Summary">
    <div class="text-xs">{{ col.time }}</div>
    <div class="text-white text-bold">{{ col.gameStyle }}</div>
    <div class="text-xs">{{ col.gameMin }} • {{ col.someRandNum }}</div>
  </div>
</template>
<script>
export default {
  props: ["col"],
};
</script>
<style lang=""></style>
