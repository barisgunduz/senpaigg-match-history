<template>
  <div class="Image pos-r" style="width: 48px; height: 48px">
    <div
      class="ImageBg"
      :style="{
        'background-image': 'url(' + champImage[0] + ')',
        'background-position': champImage[1],
      }"
    ></div>
    <div class="flx dir-r jst-c ialgn-c" style="margin-top: -10px">
      <div class="champLevel flx dir-c jst-c ialgn-c">{{ champImage[2] }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["champImage"],
};
</script>
<style scoped>
.champLevel {
  background-color: black;
  border-radius: 30px;
  font-size: 13px !important;
  z-index: 10;
  padding: 1px 4px 1px 4px;
  width: 23px;
  height: 23px;
  font-weight: bold;
}
.Image .ImageBg {
  background-repeat: no-repeat;
  border-radius: 24px;
  border: 0px none;
  transform: scale(1);
  transform-origin: left top;
}
</style>
