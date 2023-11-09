const list = [
  ["/", "東証上場企業カラム地図"],
  ["/piechart.html", "時価総額円グラフ"],
  ["/treemap.html", "差分ツリーマップ"],
];
const path = document.location.pathname;
banners.innerHTML = list.filter(i => !i[0].endsWith(path)).map(i => `<a class="banner" href=${i[0]}>${i[1]}</a>`).join("\n");
