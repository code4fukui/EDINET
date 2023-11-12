import { CSV } from "https://js.sabae.cc/CSV.js";
import { searchJCN } from "./searchJCN.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const data = await CSV.fetchJSON("data/edinetcode.csv");

let cnt = 0;
for (const d of data) {
  if (d.上場区分 != "上場") continue;
  if (!d.提出者法人番号) {
    cnt++;
    const jcn = await searchJCN(d.提出者名.trim());
    if (jcn) {
      d.提出者法人番号 = jcn;
    }
    console.log(d.提出者名, d.提出者種別, jcn);
    await sleep(1000);
  }
}
//console.log(data[0])
console.log(cnt);
//const csv = await CSV.fetchJSON("data/edinetcode_fixed.csv");
/*
const data = CSV.toJSON(csv);
const sec = data.filter(d => d.上場区分 == "上場");
await Deno.writeTextFile("data/seccode.csv", CSV.stringify(sec));
*/
await Deno.writeTextFile("data/edinetcode_fixed.csv", CSV.stringify(data));
