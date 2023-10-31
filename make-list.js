import { CSV } from "https://js.sabae.cc/CSV.js";
import { getJCNBySeccode } from "./getJCNBySeccode.js";
import { getInfoByJCN } from "./getInfoByJCN.js";

const dataj = await CSV.fetchJSON("data/data_j.csv");

for (const d of dataj) {
  const jcn = getJCNBySeccode(d.コード);
  d.JCN = jcn;
  if (jcn) {
    const info = await getInfoByJCN(jcn);
    console.log(info);
    Object.assign(d, info);
  }
}
await Deno.writeTextFile("data/list.csv", CSV.stringify(dataj));
