const list = [
  ["./", "東証上場企業カラム地図"],
  ["piechart.html", "時価総額円グラフ"],
  ["treemap.html", "時価総額ツリーマップ"],
];
const path = document.location.pathname;
console.log(path);
banners.innerHTML = list.filter(i => (i[0] == "./" && !path.endsWith("/")) || !path.endsWith(i[0])).map(i => `<a class="banner" href=${i[0]}>${i[1]}</a>`).join("\n");
