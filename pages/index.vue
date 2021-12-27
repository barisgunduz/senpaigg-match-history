<template>
  <v-app id="inspire">
    <v-data-table :items="desserts" :items-per-page="5" class="elevation-1">
      <template v-slot:item="{ item }">
        <tr class="MatchRow flx-sm dir-c-sm jst-s-sm ialgn-c-sm Active">
          <td v-for="(col, index) in item" :key="index">
            <div v-if="index == 'name'" class="ResultLabel">
              <div v-if="col == 'DEFEAT'" class="Defeat">{{ col }}</div>
              <div v-else-if="col == 'WIN'" class="Victory">{{ col }}</div>
            </div>
            <div v-else-if="index == 'calories'">
              <!-- <div class="Summary">
                <div class="text-xs">{{col.time}}</div>
                <div class="text-white text-bold">Draft Pick</div>
                <div class="text-xs">25:23 • 0.11.24</div>
              </div> -->
              <Summary :col="col" />
            </div>
            <div v-else-if="index == 'carbs'" class="Champion crs-pntr">
              <div class="Image pos-r" style="width: 48px; height: 48px">
                <div
                  class="ImageBg"
                  style="
                    background-image: url('https://static.senpai.gg/lol/img/sprite/champion1.webp');
                    background-repeat: no-repeat;
                    background-position: -433px -49px;
                    border-radius: 24px;
                    border: 0px none;
                    transform: scale(1);
                    transform-origin: left top;
                  "
                ></div>
              </div>
            </div>
            <div v-else-if="index == 'protein'" class="Spells">
              <div class="SummonerSpell">
                <span
                  ><div
                    role="tooltip"
                    id="el-popover-3637"
                    aria-hidden="true"
                    class="el-popover el-popper no-trans"
                    tabindex="0"
                    style="width: 220px; display: none"
                  >
                    <div>
                      <div class="d-flex a-center mb-20">
                        <div
                          class="SpellImage"
                          style="
                            background-image: url('https://static.senpai.gg/lol/img/spell/SummonerFlash.webp');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: 0px 0px;
                            border-radius: 0px;
                          "
                        ></div>
                        <div class="text-white">
                          <div class="text-bold">Flash</div>
                        </div>
                      </div>
                      Teleports your champion a short distance toward your
                      cursor's location.
                    </div>
                  </div>
                  <div
                    class="Image el-popover__reference"
                    aria-describedby="el-popover-3637"
                    tabindex="0"
                    style="width: 19.2px; height: 19.2px"
                  >
                    <div
                      class="ImageBg"
                      style="
                        background-image: url('https://static.senpai.gg/lol/img/spell/SummonerFlash.webp');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: 0px 0px;
                        border-radius: 0px;
                        transform: scale(0.4);
                        transform-origin: left top;
                      "
                    ></div></div
                ></span>
              </div>
              <div class="SummonerSpell">
                <span
                  ><div
                    class="Image el-popover__reference"
                    aria-describedby="el-popover-4164"
                    tabindex="0"
                    style="width: 19.2px; height: 19.2px"
                  >
                    <div
                      class="ImageBg"
                      style="
                        background-image: url('https://static.senpai.gg/lol/img/spell/SummonerHeal.webp');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: 0px 0px;
                        border-radius: 0px;
                        transform: scale(0.4);
                        transform-origin: left top;
                      "
                    ></div></div
                ></span>
              </div>
            </div>
            <div v-else-if="index == 'iron'" class="Rune vertical">
              <span
                ><div
                  class="RuneImage flx dir-r jst-c ialgn-c el-popover__reference"
                  aria-describedby="el-popover-3832"
                  tabindex="0"
                >
                  <div class="flx dir-c jst-c ialgn-c">
                    <img
                      src="https://static.senpai.gg/lol/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.webp"
                      alt="Rune"
                      loading="lazy"
                      width="46"
                      height="46"
                      class="Image"
                    />
                  </div>
                  <div class="SubRune flx dir-r jst-c ialgn-c">
                    <div class="flx dir-c jst-c ialgn-c">
                      <img
                        src="https://static.senpai.gg/lol/img/perk-images/Styles/7200_Domination.webp"
                        alt="Rune"
                        loading="lazy"
                        class="Image"
                      />
                    </div>
                  </div></div
              ></span>
            </div>
            <div v-else-if="index == 'sth1'" class="Kda tx-c-sm">
              <div class="text-grey text-bold">4 / 7 / 7</div>
              <div class="text-xs">1.57:1 KDA</div>
            </div>
            <div v-else-if="index == 'sth2'" class="CreepScore tx-c-sm">
              <div class="text-grey text-bold">130 CS</div>
              <div class="text-xs">5.12 CS/min</div>
              <div class="text-xs">34 KP</div>
            </div>
            <div v-else-if="index == 'sth3'" class="d-flex a-center">
              <div class="Items">
                <div class="MainItems">
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <span
                      ><div
                        role="tooltip"
                        id="el-popover-5746"
                        aria-hidden="true"
                        class="el-popover el-popper false"
                        tabindex="0"
                        style="width: 220px; display: none"
                      >
                        <div>
                          <div class="d-flex a-center mb-10">
                            <div
                              class="ItemImage"
                              style="
                                background-color: rgb(28, 31, 51);
                                background-image: url('https://static.senpai.gg/lol/img/item/3094.webp');
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: 0px 0px;
                                border-radius: 8px;
                              "
                            ></div>
                            <div class="text-white">
                              <div class="text-bold">Rapid Firecannon</div>
                              <div>
                                Movement builds charges that release a sieging
                                fire attack on release
                              </div>
                            </div>
                          </div>
                          <div class="text-lightgold mb-10">
                            <div>Gold:</div>
                            <div>2500</div>
                          </div>
                          <div>
                            <maintext
                              ><stats
                                ><attention>35%</attention> Attack Speed<br /><attention
                                  >20%</attention
                                >
                                Critical Strike Chance<br /><attention
                                  >7%</attention
                                >
                                Move Speed</stats
                              ><br />
                              <li>
                                <passive>Energized:</passive> Moving and
                                Attacking will generate an Energized Attack.
                              </li>
                              <li>
                                <passive>Sharpshooter:</passive> Your Energized
                                Attack applies
                                <magicdamage>120 bonus magic damage</magicdamage
                                >. In addition, Energized attacks gain up to 35%
                                bonus Attack Range.<br /><br /><rules
                                  >Attack Range cannot increase more than 150
                                  units.</rules
                                ><br /></li
                            ></maintext>
                          </div>
                        </div>
                      </div>
                      <div
                        class="Image el-popover__reference"
                        aria-describedby="el-popover-5746"
                        tabindex="0"
                        style="width: 19.2px; height: 19.2px"
                      >
                        <div
                          class="ImageBg"
                          style="
                            background-color: rgb(28, 31, 51);
                            background-image: url('https://static.senpai.gg/lol/img/item/3094.webp');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: 0px 0px;
                            border-radius: 8px;
                            transform: scale(0.4);
                            transform-origin: left top;
                          "
                        ></div></div
                    ></span>
                  </div>
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <span
                      ><div
                        role="tooltip"
                        id="el-popover-8832"
                        aria-hidden="true"
                        class="el-popover el-popper false"
                        tabindex="0"
                        style="width: 220px; display: none"
                      >
                        <div>
                          <div class="d-flex a-center mb-10">
                            <div
                              class="ItemImage"
                              style="
                                background-color: rgb(28, 31, 51);
                                background-image: url('https://static.senpai.gg/lol/img/item/6671.webp');
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: 0px 0px;
                                border-radius: 8px;
                              "
                            ></div>
                            <div class="text-white">
                              <div class="text-bold">Galeforce</div>
                              <div></div>
                            </div>
                          </div>
                          <div class="text-lightgold mb-10">
                            <div>Gold:</div>
                            <div>3400</div>
                          </div>
                          <div>
                            <maintext
                              ><stats
                                ><attention>60</attention> Attack Damage<br /><attention
                                  >20%</attention
                                >
                                Attack Speed<br /><attention>20%</attention>
                                Critical Strike Chance</stats
                              ><br /><br /><active>Active -</active>
                              <active>Cloudburst:</active> Dash in target
                              direction, firing three missiles at the lowest
                              Health enemy near your destination (prioritizing
                              champions). Deals a total of
                              <magicdamage
                                >(180 - 220 (based on level) + 45% bonus Attack
                                Damage) magic damage</magicdamage
                              >, increased against low Health targets by up to
                              50% (90s cooldown).<br /><br /><raritymythic
                                >Mythic Passive:</raritymythic
                              >
                              Grants all other
                              <raritylegendary>Legendary</raritylegendary>
                              items <attention>2%</attention> Move Speed.<br /><br /><rules
                                >Maximum missile damage dealt when enemy Health
                                is below 30%.<br />Cloudburst's dash cannot pass
                                through terrain.</rules
                              ></maintext
                            ><br />
                          </div>
                        </div>
                      </div>
                      <div
                        class="Image el-popover__reference"
                        aria-describedby="el-popover-8832"
                        tabindex="0"
                        style="width: 19.2px; height: 19.2px"
                      >
                        <div
                          class="ImageBg"
                          style="
                            background-color: rgb(28, 31, 51);
                            background-image: url('https://static.senpai.gg/lol/img/item/6671.webp');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: 0px 0px;
                            border-radius: 8px;
                            transform: scale(0.4);
                            transform-origin: left top;
                          "
                        ></div></div
                    ></span>
                  </div>
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <span
                      ><div
                        role="tooltip"
                        id="el-popover-6072"
                        aria-hidden="true"
                        class="el-popover el-popper false"
                        tabindex="0"
                        style="width: 220px; display: none"
                      >
                        <div>
                          <div class="d-flex a-center mb-10">
                            <div
                              class="ItemImage"
                              style="
                                background-color: rgb(28, 31, 51);
                                background-image: url('https://static.senpai.gg/lol/img/item/3006.webp');
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: 0px 0px;
                                border-radius: 8px;
                              "
                            ></div>
                            <div class="text-white">
                              <div class="text-bold">Berserker's Greaves</div>
                              <div>
                                Enhances Movement Speed and Attack Speed
                              </div>
                            </div>
                          </div>
                          <div class="text-lightgold mb-10">
                            <div>Gold:</div>
                            <div>1100</div>
                          </div>
                          <div>
                            <maintext
                              ><stats
                                ><attention>35%</attention> Attack Speed<br /><attention
                                  >45</attention
                                >
                                Move Speed</stats
                              ></maintext
                            ><br />
                          </div>
                        </div>
                      </div>
                      <div
                        class="Image el-popover__reference"
                        aria-describedby="el-popover-6072"
                        tabindex="0"
                        style="width: 19.2px; height: 19.2px"
                      >
                        <div
                          class="ImageBg"
                          style="
                            background-color: rgb(28, 31, 51);
                            background-image: url('https://static.senpai.gg/lol/img/item/3006.webp');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: 0px 0px;
                            border-radius: 8px;
                            transform: scale(0.4);
                            transform-origin: left top;
                          "
                        ></div></div
                    ></span>
                  </div>
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <span
                      ><div
                        class="Image el-popover__reference"
                        aria-describedby="el-popover-9920"
                        tabindex="0"
                        style="width: 19.2px; height: 19.2px"
                      >
                        <div
                          class="ImageBg"
                          style="
                            background-color: rgb(28, 31, 51);
                            background-image: url('https://static.senpai.gg/lol/img/item/1036.webp');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: 0px 0px;
                            border-radius: 8px;
                            transform: scale(0.4);
                            transform-origin: left top;
                          "
                        ></div></div
                    ></span>
                  </div>
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <div
                      class="Empty"
                      style="width: 19.2px; height: 19.2px"
                    ></div>
                  </div>
                  <div class="Item flx dir-r jst-c ialgn-c">
                    <div
                      class="Empty"
                      style="width: 19.2px; height: 19.2px"
                    ></div>
                  </div>
                </div>
                <div class="Item flx dir-r jst-c ialgn-c">
                  <span
                    ><div
                      role="tooltip"
                      id="el-popover-6903"
                      aria-hidden="true"
                      class="el-popover el-popper false"
                      tabindex="0"
                      style="width: 220px; display: none"
                    >
                      <div>
                        <div class="d-flex a-center mb-10">
                          <div
                            class="ItemImage"
                            style="
                              background-color: rgb(28, 31, 51);
                              background-image: url('https://static.senpai.gg/lol/img/item/3340.webp');
                              background-repeat: no-repeat;
                              background-size: cover;
                              background-position: 0px 0px;
                              border-radius: 8px;
                            "
                          ></div>
                          <div class="text-white">
                            <div class="text-bold">Stealth Ward</div>
                            <div>Periodically place a Stealth Ward</div>
                          </div>
                        </div>
                        <div class="text-lightgold mb-10">
                          <div>Gold:</div>
                          <div>0</div>
                        </div>
                        <div>
                          <maintext
                            ><stats></stats
                            ><active>Active - Trinket:</active> Place a Stealth
                            Ward on the ground that lasts between
                            <scalelevel>90 - 120</scalelevel> seconds, is
                            <keywordstealth>Invisible</keywordstealth> to
                            enemies but grants your team vision of the
                            surrounding area. Stores up to 2 Stealth Wards,
                            generating a new Ward every
                            <scalelevel>240 - 120</scalelevel>
                            seconds. </maintext
                          ><br />
                        </div>
                      </div>
                    </div>
                    <div
                      class="Image el-popover__reference"
                      aria-describedby="el-popover-6903"
                      tabindex="0"
                      style="width: 19.2px; height: 19.2px"
                    >
                      <div
                        class="ImageBg"
                        style="
                          background-color: rgb(28, 31, 51);
                          background-image: url('https://static.senpai.gg/lol/img/item/3340.webp');
                          background-repeat: no-repeat;
                          background-size: cover;
                          background-position: 0px 0px;
                          border-radius: 8px;
                          transform: scale(0.4);
                          transform-origin: left top;
                        "
                      ></div></div
                  ></span>
                </div>
              </div>
            </div>
            <div v-else-if="index == 'sth4'" class="Teams">
              <div class="RedTeam"></div>
              <div class="BlueTeam"></div>
            </div>
            <a
              v-else-if="index == 'sth5'"
              href="/lol/post-game/euw/5626965839/Sayg%C4%B1s%C4%B1z%20Tavuk"
              class="btn-primary"
            >
              SEE POSTGAME
            </a>
          </td>
          <!-- <td v-for="(col, indx) in item" :key="indx">
          <div v-if="indx == 'DEFEAT'" class="ResultLabel">
            <div class="Defeat">{{ col  }}</div>
          </div>
          <div v-else  class="ResultLabel">
            <div class="Defeat">{{ col }}</div>
          </div>
        </td> -->
        </tr>
      </template>
    </v-data-table>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "DEFEAT",
          calories: {
            time: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            someRandNum: "0.11.24",
          },
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
          sth1: "asd",
          sth2: "qer",
          sth3: "wer",
          sth4: "qwertty",
          sth5: "dsfg",
        },
        {
          name: "DEFEAT",
          calories: {
            time: "3 days ago",
            gameStyle: "Ranked Game",
            gameMin: "21:23",
            someRandNum: "0.11.24",
          },
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
          sth1: "asd",
          sth2: "qer",
          sth3: "wer",
          sth4: "qwertty",
          sth5: "dsfg",
        },
        {
          name: "DEFEAT",
          calories: {
            time: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            someRandNum: "0.11.24",
          },
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
          sth1: "asd",
          sth2: "qer",
          sth3: "wer",
          sth4: "qwertty",
          sth5: "dsfg",
        },
        {
          name: "DEFEAT",
          calories: {
            time: "3 days ago",
            gameStyle: "Normal Game",
            gameMin: "25:23",
            someRandNum: "0.11.24",
          },
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
          sth1: "asd",
          sth2: "qer",
          sth3: "wer",
          sth4: "qwertty",
          sth5: "dsfg",
        },
        {
          name: "WIN",
          calories: {
            time: "3 days ago",
            gameStyle: "Draft Pick",
            gameMin: "25:23",
            someRandNum: "0.11.24",
          },
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
          sth1: "asd",
          sth2: "qer",
          sth3: "wer",
          sth4: "qwertty",
          sth5: "dsfg",
        },
      ],
    };
  },
};
</script>
<style>
body a,
body b,
body div,
body h1,
body h2,
body h3,
body h4,
body h5,
body h6,
body li,
body p,
body span,
body strong,
body ul {
  word-break: normal;
}

* {
  box-sizing: border-box;
  outline: none !important;
}
table > tr {
  vertical-align: middle;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.MatchList .el-card .el-card__body .MatchTable .Table {
  border-collapse: separate;
  border-spacing: 0 4px;
}

.MatchRow {
  background-color: #1c1f33;
  box-shadow: 0 0 30px rgb(0 0 0 / 50%);
  transition: all 0.3s;
}

.MatchRow.Active {
  box-shadow: none;
  background-color: rgba(238, 99, 82, 0.1);
}

.MatchRow td {
  padding: 0 5px;
  min-width: 30px;
}
.MatchRow .ResultLabel {
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
}
.MatchRow td > * {
  margin: 0 5px 0 0;
  white-space: nowrap;
}
.MatchRow .ResultLabel div {
  height: 70px;
  text-align: center;
  padding: 8px 4px;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin-left: -5px;
}
.MatchRow.Active.Victory {
  background-color: rgba(136, 217, 162, 0.1);
}
.ResultLabel .Defeat {
  background-color: #ee6352;
}
.ResultLabel .Victory {
  background-color: #57a773;
}
.text-xs {
  font-size: 10px;
}
.text-white {
  color: #fff;
}
.text-bold {
  font-weight: 700;
}

.text-xs {
  font-size: 10px;
}

.Champion {
  display: inline-block;
}
.crs-pntr {
  cursor: pointer !important;
}
.pos-r {
  position: relative !important;
}
.MatchRow .Spells {
  display: flex;
  flex-direction: row;
}
.SummonerSpell {
  display: inline-block;
  margin-bottom: 2px;
  border-radius: 3px;
  overflow: hidden;
}
.SummonerSpell:last-child {
  margin: 0;
}
.el-popover.no-trans {
  transition: none !important;
}
.el-popover {
  text-align: left;
  word-break: unset;
}
.el-popover {
  color: #b6b7c6;
  box-shadow: 0 0 30px 0 rgb(0 44 159 / 50%);
  border-radius: 0;
  border: none;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  word-break: unset;
}
.el-popover {
  position: absolute;
  background: #00000d;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #eee;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;
}
el-popover .SpellImage {
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
.SummonerSpell .Image .ImageBg {
  position: relative;
  width: 48px;
  height: 48px;
  border: 2px solid #00000d;
  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
}
.Rune {
  display: block;
  padding-bottom: 9px;
}

.Rune .RuneImage {
  width: 48px;
  height: 48px;
  border: 1px solid #00000d;
  border-radius: 50%;
  position: relative;
}
.ialgn-c {
  align-items: center;
}
.jst-c {
  justify-content: center;
}
.dir-r {
  flex-direction: row;
}
.flx {
  display: -webkit-flexbox !important;
  display: -moz-flex !important;
  display: flex !important;
}
.Rune .RuneImage .Image {
  width: 46px;
  height: 46px;
}
img {
  border-style: none;
  max-width: 100%;
}
.Rune .RuneImage .SubRune {
    background-color: #00000d;
    width: 25px;
    height: 25px;
    border-radius: 30px;
    padding: 0px;
    position: absolute;
    top: 75%;
    margin: auto auto auto 0px;
}
.Rune .RuneImage .SubRune .Image {
    width: 16px;
    height: 16px;
}
.text-grey {
  color: #eaeaee;
}
.a-center {
  align-items: center;
}
.d-flex {
  display: flex;
}
.Items {
  display: flex;
  align-items: center;
}
.Items .MainItems {
  width: 66px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
}
.Item {
  display: inline-block;
  border-radius: 3px;
  position: relative;
}

.el-popover .ItemImage {
  position: relative;
  min-width: 48px;
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
.text-lightgold {
  color: #fed05a;
}
.Item .Image .ImageBg {
  position: relative;
  width: 48px;
  height: 48px;
}
.MatchRow .Teams .RedTeam {
  display: flex;
}
.MatchRow .Teams .BlueTeam {
  display: flex;
  position: relative;
  left: -10px;
}
.MatchRow .btn-primary,
.MatchRow .btn-yellow {
  padding: 12px 10px;
  font-weight: 700;
  font-size: 12px;
}
.MatchRow .btn-primary {
  background: #002c9f;
  box-shadow: 0 0 15px rgb(0 0 0 / 50%);
  line-height: 14px;
  color: #fff;
}
.Champion .Image .ImageBg {
  position: relative;
  width: 48px;
  height: 48px;
}
</style>
