import { CSV } from "https://js.sabae.cc/CSV.js";
import { searchJCN } from "./searchJCN.js";
import { getInfoByJCN } from "./getInfoByJCN.js";

const dataj = await CSV.fetchJSON("data/data_j.csv");
const seccodes = await CSV.fetchJSON("data/seccode.csv");
const seccodesA = await CSV.fetchJSON("data/seccode_append.csv");
seccodesA.forEach(i => seccodes.push(i));

const getCompanyBySeccode = (seccode) => {
  if (seccode.length == 4) {
    seccode += "0";
  }
  const res = seccodes.find(s => s.証券コード == seccode);
  return res;
};

const data = await CSV.fetchJSON("data/listed_company.csv");
for (const d of dataj) {
  const name = d.銘柄名;
  if (name.endsWith(" 優先株式")) {
    continue;
  }
  const market0 = d["市場・商品区分"];
  if (!market0.endsWith("（内国株式）")) {
    continue;
  }
  let c = getCompanyBySeccode(d.コード);
  if (!c) {
    const jcn = await searchJCN(name);
    if (!jcn) {
      console.log("can't search JCN", d.コード, d.銘柄名);
      continue;
    }
    seccodesA.push({ 証券コード: d.コード + "0", 提出者名: name, 提出者法人番号: jcn });
    c = { 提出者法人番号: jcn };
  }
  const fixMarket = (s) => {
    if (s.startsWith("プライム"))
      return "P";
    if (s.startsWith("スタンダード"))
      return "S";
    if (s.startsWith("グロース"))
      return "G";
    throw new Error("unknown market name: " + s);
  };
  const market = fixMarket(market0);
  delete d["市場・商品区分"];
  d.市場コード = market; // P S G
  d.法人番号 = c.提出者法人番号;
  if (!d.法人番号) {
    console.log("no JCN", d.コード, d.銘柄名);
    continue;
  }
  delete d["33業種区分"];
  delete d["17業種区分"];
  delete d["規模区分"];
  if (!data.find(i => i.コード == d.コード)) {
    // ,法人名,法人名ふりがな,法人名英語,本店所在地,設立,時価総額
    const info = await getInfoByJCN(d.法人番号);
    d.法人名 = info.corporateName;
    d.法人名ふりがな = info.corporateKana;
    d.本店所在地 = info.location;
    data.push(d);
    console.log("new!", d);
  }
}
// 日付,コード,銘柄名,33業種コード,17業種コード,規模コード,市場コード,法人番号,法人名,法人名ふりがな,法人名英語,本店所在地,設立,時価総額
await Deno.writeTextFile("data/listed_company.csv", CSV.stringify(data));

await Deno.writeTextFile("data/seccode_append.csv", CSV.stringify(seccodesA));
