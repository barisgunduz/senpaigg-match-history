<template>
  <div v-if="matchResult == 'DEFEAT'" class="Defeat">{{ matchResult }}</div>
  <div v-else-if="matchResult == 'VICTORY'" class="Victory">
    {{ matchResult }}
  </div>
</template>
<script>
export default {
  props: ["matchResult"],
};
</script>
