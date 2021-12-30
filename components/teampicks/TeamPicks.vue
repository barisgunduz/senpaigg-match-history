<template>
  <div>
    <div class="MainItems">
      <RedTeam :redTeam="teamPicks.redTeam" />
      <BlueTeam :blueTeam="teamPicks.blueTeam" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["teamPicks"],
};
</script>
