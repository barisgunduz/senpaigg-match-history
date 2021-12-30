<template>
  <div>
    <div class="text-grey text-bold">{{ kda[0] }}</div>
    <div class="text-xs">{{ kda[1] }}</div>
  </div>
</template>
<script>
export default {
  props: ["kda"],
};
</script>
