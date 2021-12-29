<template>
  <div class="Image">
    <div
      v-if="itemSet"
      class="ImageBg"
      :style="{ 'background-image': 'url(' + itemSet + ')' }"
    ></div>
    <div v-else class="Empty"></div>
  </div>
</template>
<script>
export default {
  props: ["itemSet"],
};
</script>
