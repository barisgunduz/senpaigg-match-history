<template>
  <v-data-table :items="matchHistoryList" :items-per-page="5" class="elevation-1">
    <template v-slot:item="{ item }">
      <tr class="MatchRow flx-sm dir-c-sm jst-s-sm ialgn-c-sm Active" :class="item.result=='VICTORY' ? 'Victory' : ''">
        <td v-for="(col, index) in item" :key="index">
          <div v-if="index == 'result'" class="ResultLabel">
            <Result :matchResult="col" />
          </div>
          <div v-else-if="index == 'summary'">
            <Summary :summary="col" />
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
            <TeamPicks />
          </div>
          <NuxtLink
            v-else-if="index == 'postGameButton'"
            to="/inspire"
            class="btn-primary"
          >
            POSTGAME
          </NuxtLink>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      matchHistory: [
        {
          result: "DEFEAT",
          summary: {
            gameTime: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            gameVersion: "0.11.24",
          },
          selectedChamp: 6.0,
          summonerSpells: 24,
          runes: 4.0,
          kda: "1%",
          minionScore: "asd",
          items: "qer",
          teamPicks: "wer",
          postGameButton: "wer",
        },
        {
          result: "DEFEAT",
          summary: {
            gameTime: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            gameVersion: "0.11.24",
          },
          selectedChamp: 9.0,
          summonerSpells: 37,
          runes: 4.3,
          kda: "1%",
          minionScore: "asd",
          items: "qer",
          teamPicks: "wer",
          postGameButton: "wer",
        },
        {
          result: "DEFEAT",
          summary: {
            gameTime: "3 days ago",
            gameStyle: "Ranked Game",
            gameMin: "25:23",
            gameVersion: "0.11.24",
          },
          selectedChamp: 16.0,
          summonerSpells: 23,
          runes: 6.0,
          kda: "7%",
          minionScore: "asd",
          items: "qer",
          teamPicks: "wer",
          postGameButton: "wer",
        },
        {
          result: "DEFEAT",
          summary: {
            gameTime: "3 days ago",
            gameStyle: "Normal Game",
            gameMin: "25:23",
            gameVersion: "0.11.24",
          },
          selectedChamp: 3.7,
          summonerSpells: 67,
          runes: 4.3,
          kda: "8%",
          minionScore: "asd",
          items: "qer",
          teamPicks: "wer",
          postGameButton: "wer",
        },
        {
          result: "WIN",
          summary: {
            gameTime: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            gameVersion: "0.11.24",
          },
          selectedChamp: 16.0,
          summonerSpells: 49,
          runes: 3.9,
          kda: "16%",
          minionScore: "asd",
          items: "qer",
          teamPicks: "wer",
          postGameButton: "wer",
        },
      ],
    };
  },
  computed: {
    matchHistoryList() {
      // console.log("deneme : ", this.$store.getters.getMatchHistory)
      return this.$store.getters.getMatchHistory;
    }
  },
};
</script>
<style lang=""></style>
