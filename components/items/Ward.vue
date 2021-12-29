<template>
  <div class="Item flx dir-r jst-c ialgn-c">
      <div class="Image">
        <div
          class="ImageBg Ward"
          :style="{ 'background-image': 'url(' + wardItem[6] + ')' }"
        ></div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["wardItem"]
}
</script>
<style scoped>
.Ward {
  background-size: contain;
  width: 20px !important;
  height: 20px !important;
}
</style>
