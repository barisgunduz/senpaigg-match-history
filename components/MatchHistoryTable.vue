<template>
  <v-data-table
    :items="matchHistoryList"
    :items-per-page="5"
    class="Table flx-sm dir-r-sm jst-s-sm flx-nw-sm ialgn-st-sm"
  >
    <template v-slot:item="{ item }">
      <tr
        class="MatchRow flx-sm dir-c-sm jst-s-sm ialgn-c-sm Active"
        :class="item.result == 'VICTORY' ? 'Victory' : ''"
      >
        <td v-for="(col, index) in item" :key="col.id">
          <div v-if="index == 'result'" class="ResultLabel">
            <Result :matchResult="col" />
          </div>
          <div v-else-if="index == 'summary'">
            <Summary :summary="col" />
          </div>
          <div v-else-if="index == 'averageMatchRank'" >
            <AverageMatchRank :averageMatchRank="col" />
          </div>
          <div v-else-if="index == 'selectedChamp'" class="Champion crs-pntr">
            <SelectedChamp :champImage="col" />
          </div>
          <div v-else-if="index == 'summonerSpells'" class="Spells">
            <SummonerSpell :spells="col" />
          </div>
          <div v-else-if="index == 'runes'" class="Rune vertical">
            <Runes :runes="col" />
          </div>
          <div v-else-if="index == 'kda'" class="Kda tx-c-sm">
            <Kda :kda="col" />
          </div>
          <div v-else-if="index == 'minionScore'" class="CreepScore tx-c-sm">
            <MinionScore :minionScore="col" />
          </div>
          <div v-else-if="index == 'items'" class="d-flex a-center">
            <Items :item="col" />
          </div>
          <div v-else-if="index == 'teamPicks'" class="Teams">
            <TeamPicks :teamPicks="col" />
          </div>
          <a
            v-else-if="index == 'postGameButton'"
            href="https://app.senpai.gg/lol/profile/euw/Sayg%C4%B1s%C4%B1z%20Tavuk"
            class="btn-primary"
          >
            POSTGAME
          </a>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
export default {
  computed: {
    matchHistoryList() {
      // console.log("deneme : ", this.$store.getters.getMatchHistory)
      return this.$store.getters.getMatchHistory;
    },
  },
};
</script>
