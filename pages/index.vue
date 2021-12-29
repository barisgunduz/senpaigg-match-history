<template>
  <v-app id="inspire">
    <Header />
    <MatchHistoryTable />
  </v-app>
</template>
<script>
export default {
  data() {
    return {};
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

a{
  text-decoration: none;
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

.Item>div {
    background: url(data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACQBQCdASogAB4APpE6mkkloyKhMBgIALASCWUAv+wQ7371dfB+rzHGV/7uUrMtGG+EW0dJdAD++91bWHyzSnx5vNNYt+ZIfaSTL4KZTlKUq8e6Im9ce8SC3c7vErsah2tTvafNfIV5T/YmJ5cIqqHCmRog26qOh2iAB6/nsl1oPAAA);
    background-size: cover;
}

.Item>div.Empty {
    -webkit-filter: drop-shadow(0 0 15px rgba(0,0,0,.5));
    filter: drop-shadow(0 0 15px rgba(0,0,0,.5));
    background-position: 50%;
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

.Items .MainItems .Image, .Empty{
  width: 19.2px;
  height: 19.2px
}
.Items .MainItems .ImageBg{
  background-color: rgb(28, 31, 51);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 0px;
  border-radius: 8px;
  transform: scale(0.4);
  transform-origin: left top;
}

</style>
