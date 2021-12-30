<template>
  <span>
    <div class="RuneImage flx dir-r jst-c ialgn-c el-popover__reference">
      <div class="flx dir-c jst-c ialgn-c">
        <img :src="runes[0]" alt="Rune" width="46" height="46" class="Image" />
      </div>
      <div class="SubRune flx dir-r jst-c ialgn-c">
        <div class="flx dir-c jst-c ialgn-c">
          <img :src="runes[1]" alt="Rune" class="Image" />
        </div>
      </div></div
  ></span>
</template>
<script>
export default {
  props: ["runes"],
};
</script>
