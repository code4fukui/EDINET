import { Day } from "https://js.sabae.cc/DateTime.js";
import { download } from "./download.js";

// JCN = 法人番号

//const start = new Day("2022-11-17");
const start = new Day("2022-12-27");
const end = new Day("2022-12-27");
const filerNames = new Set();
for (let d = start; !d.isAfter(end); d = d.nextDay()) {
  console.log(d);
  await download(d);
}
