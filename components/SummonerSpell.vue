<template>
  <div style="display: flex; flex-direction: row">
    <div class="SummonerSpell">
      <span>
        <div class="Image" style="width: 19.2px; height: 19.2px">
          <div
            class="ImageBg"
            :style="{ 'background-image': 'url(' + spells[0] + ')' }"
          ></div></div
      ></span>
    </div>
    <div class="SummonerSpell">
      <span
        ><div class="Image" style="width: 19.2px; height: 19.2px">
          <div
            class="ImageBg SpellTwo"
            :style="{ 'background-image': 'url(' + spells[1] + ')' }"
          ></div></div
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["spells"],
};
</script>
<style scoped>
.SummonerSpell .Image .ImageBg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 0px;
  border-radius: 0px;
  transform: scale(0.4);
  transform-origin: left top;
}
.SummonerSpell .Image .SpellTwo {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 0px;
  border-radius: 0px;
  transform: scale(0.4);
  transform-origin: left top;
}
</style>
