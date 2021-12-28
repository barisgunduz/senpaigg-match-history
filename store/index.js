export const state = () => {
  matchHistory: [];
};

export const mutations = {
  setMatchHistory(state, matches) {
    state.matchHistory = matches;
  },
};

export const actions = {
  async nuxtServerInit({commit, dispatch}) {
    await dispatch('matchHistoryData')
    // vuexContext.commit("setMatchHistory", [
    //   {
    //     result: "WIN",
    //     summary: {
    //       gameTime: "3 days ago",
    //       gameStyle: "Draft Pick",
    //       gameMin: "25:23",
    //       gameVersion: "0.11.24",
    //     },
    //     selectedChamp: 6.0,
    //     summonerSpells: 24,
    //     runes: 4.0,
    //     kda: "1%",
    //     minionScore: "asd",
    //     items: "qer",
    //     teamPicks: "wer",
    //     postGameButton: "wer",
    //   },
    //   {
    //     result: "DEFEAT",
    //     summary: {
    //       gameTime: "3 days ago",
    //       gameStyle: "Draft Pick",
    //       gameMin: "25:23",
    //       gameVersion: "0.11.24",
    //     },
    //     selectedChamp: 9.0,
    //     summonerSpells: 37,
    //     runes: 4.3,
    //     kda: "1%",
    //     minionScore: "asd",
    //     items: "qer",
    //     teamPicks: "wer",
    //     postGameButton: "wer",
    //   },
    //   {
    //     result: "DEFEAT",
    //     summary: {
    //       gameTime: "3 days ago",
    //       gameStyle: "Ranked Game",
    //       gameMin: "25:23",
    //       gameVersion: "0.11.24",
    //     },
    //     selectedChamp: 16.0,
    //     summonerSpells: 23,
    //     runes: 6.0,
    //     kda: "7%",
    //     minionScore: "asd",
    //     items: "qer",
    //     teamPicks: "wer",
    //     postGameButton: "wer",
    //   },
    //   {
    //     result: "DEFEAT",
    //     summary: {
    //       gameTime: "3 days ago",
    //       gameStyle: "Normal Game",
    //       gameMin: "25:23",
    //       gameVersion: "0.11.24",
    //     },
    //     selectedChamp: 3.7,
    //     summonerSpells: 67,
    //     runes: 4.3,
    //     kda: "8%",
    //     minionScore: "asd",
    //     items: "qer",
    //     teamPicks: "wer",
    //     postGameButton: "wer",
    //   },
    //   {
    //     result: "WIN",
    //     summary: {
    //       gameTime: "3 days ago",
    //       gameStyle: "Draft Pick",
    //       gameMin: "25:23",
    //       gameVersion: "0.11.24",
    //     },
    //     selectedChamp: 16.0,
    //     summonerSpells: 49,
    //     runes: 3.9,
    //     kda: "16%",
    //     minionScore: "asd",
    //     items: "qer",
    //     teamPicks: "wer",
    //     postGameButton: "wer",
    //   },
    // ]);
  },
  async matchHistoryData({commit}) {
    const {data} = await this.$axios.get('https://61c5d0a5c003e70017b79940.mockapi.io/api/users')
    commit('setMatchHistory', data)
  },
  setMatchHistory(vuexContext, matches) {
    vuexContext.commit("setMatchHistory", matches);
  },
};

export const getters = {
  getMatchHistory(state) {
    return state.matchHistory;
  },
};
