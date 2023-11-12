import { CSV } from "https://js.sabae.cc/CSV.js";
import { scrapeInfoByJCN } from "./scrapeInfoByJCN.js";

const data = await CSV.fetchJSON("data/listed_company.csv");

const basic3 = await CSV.fetchJSON("data/basic3info.csv", []);

for (const d of data) {
  const info = basic3.find(i => i.法人番号 == d.法人番号);
  if (info) {
    Object.assign(d, info);
  } else {
    const info = await scrapeInfoByJCN(d.法人番号);
    Object.assign(d, info);
    basic3.push(info);
    await Deno.writeTextFile("data/basic3info.csv", CSV.stringify(basic3));
  }
}
await Deno.writeTextFile("data/listed_company_basic3.csv", CSV.stringify(data));
