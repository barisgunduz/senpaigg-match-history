<template>
  <div>
    <div class="text-grey text-bold">{{ minionScore[0] }}</div>
    <div class="text-xs">{{ minionScore[1] }}</div>
    <div class="text-xs">{{ minionScore[2] }}</div>
  </div>
</template>
<script>
export default {
  props: ["minionScore"],
};
</script>
