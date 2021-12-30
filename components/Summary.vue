<template>
  <div class="Summary">
    <div class="text-xs">{{ summary[0] }}</div>
    <div class="text-white text-bold">{{ summary[1] }}</div>
    <div class="text-xs">{{ summary[2] }} • {{ summary[3] }}</div>
  </div>
</template>
<script>
export default {
  props: ["summary"],
};
</script>
