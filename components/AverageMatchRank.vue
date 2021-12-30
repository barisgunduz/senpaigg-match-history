<template>
  <div class="Champion crs-pntr">
    <div class="Image pos-r" style="width: 48px; height: 48px">
      <div class="AverageMatchRank">{{ averageMatchRank }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["averageMatchRank"],
};
</script>
