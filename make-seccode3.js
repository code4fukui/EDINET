import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("data/edinetcode_fixed.csv");

const sec = data.filter(d => d.上場区分 == "上場");
console.log(sec.filter(i => !i.提出者法人番号).length);
await Deno.writeTextFile("data/seccode.csv", CSV.stringify(sec));
