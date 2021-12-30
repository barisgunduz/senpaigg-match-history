<template>
  <div class="BlueTeam">
    <div
      v-for="hero in blueTeam"
      :key="hero.name"
      class="Item flx dir-r jst-c ialgn-c"
    >
      <div class="Image">
        <div
          class="ImageBg"
          :style="{
            'background-image': 'url(' + hero[0] + ')',
            'background-position': hero[1],
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["blueTeam"],
};
</script>
<style scoped>
.Image {
  border-radius: 20px;
}
.ImageBg {
  width: 20px !important;
  height: 20px !important;
  border-radius: 20px;
}
.BlueTeam .ImageBg {
  border: 1px solid #172c9f;
}
</style>
