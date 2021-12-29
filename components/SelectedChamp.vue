<template>
  <div class="Image pos-r" style="width: 48px; height: 48px">
    <div
      class="ImageBg"
      :style="{'background-image': 'url(' + champImage[0] +')', 'background-position': champImage[1]}"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["champImage"],
};
</script>
<style scoped>
.Image .ImageBg {
  background-repeat: no-repeat;
  border-radius: 24px;
  border: 0px none;
  transform: scale(1);
  transform-origin: left top;
}
</style>
