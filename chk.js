import { CSV } from "https://js.sabae.cc/CSV.js";
import { Day } from "https://js.sabae.cc/DateTime.js";

/*
edinetCode 提出者のEDINETコード
secCode 提出者の証券コード
JCN 提出者の法人番号（個人などの場合空欄）
filerName 提出者の名前
fundCode ファンドコード
*/

const start = new Day("2022-11-17");
const end = new Day();
const users = {};
for (let d = start; !d.isAfter(end); d = d.nextDay()) {
  //console.log(d);
  const fn = "data/documents/" + d.toString() + ".csv";
  console.log(fn);
  const data = await CSV.fetchJSON(fn);
  //console.log(data);
  data.forEach(d => {
    if (!d.edinetCode) {
      // console.log(d); // 取り下げなど
      return;
    } 
    const n = d.edinetCode;
    if (!users[n]) {
      users[n] = {
        data: d,
        count: 1
      };
    } else {
      users[n].count++;
    }
  });
}
const data = Object.keys(users).map(edinetCode => {
  const u = users[edinetCode];
  const d = u.data;
  return {
    edinetCode,
    secCode: d.secCode,
    JCN: d.JCN,
    filerName: d.filerName,
    count: u.count,
  };
}).sort((a, b) => b.count - a.count);
await Deno.writeTextFile("data/ranking-count.csv", CSV.stringify(data));
