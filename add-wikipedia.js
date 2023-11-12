import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { Day } from "https://js.sabae.cc/DateTime.js";
import { getWikipediaFromJCN } from "./getWikipediaFromJCN.js";

//const url = "./data/seccode.csv";
const fn = "./data/listed_company.csv";
const data = await CSV.fetchJSON(fn);

const getInfoBox = (dom) => {
  const infoboxes = dom.querySelectorAll("table.infobox");
  //console.log(infoboxes);
  return infoboxes.map(infobox => {
    const cap = infobox.querySelector("caption");
    const name = cap?.text.trim();
    //console.log(name);
    const info = {};
    const trs = infobox.querySelectorAll("tr");
    for (const tr of trs) {
      const th = tr.querySelector("th");
      if (th) {
        const dname = th.text.trim();
        const td = tr.querySelector("td");
        if (td) {
          const dval = td.text.trim();
          info[dname] = dval;
        }
      }
    }
    //return { name, info };
    return info;
  });
};

const parseInfoBox = async (url) => {
  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);
  const info = getInfoBox(dom);
  info.forEach(i => i.wikipedia = url);
  return info;
};

const makeInfoBox = async (cname, jcn) => {
  const name = cname.replace("株式会社", "");
  const wiki = "https://ja.wikipedia.org/wiki/" + encodeURIComponent(name);
  const info = await parseInfoBox(wiki);
  if (info && info.length > 0 && info[0].法人番号 == jcn) return info;
  const wiki2 = await getWikipediaFromJCN(jcn);
  if (!wiki2) return null;
  const info2 = await parseInfoBox(wiki2);
  if (info2 && info2.length > 0 && info2[0].法人番号 == jcn) return info2;
  return null;
};

let hit = 0;
let no = 0;
for (const d of data) {
  const name = d.銘柄名;
  const info = await makeInfoBox(name, d.法人番号);
  if (info && info.length > 0) {
    //const ymd = new Day(info[0].設立).toString();
    //console.log(name, info[0].設立, ymd);
    console.log(name, info[0].設立);
    //Object.assign(d, info[0]);
    d.設立 = info[0].設立;
    hit++;
  } else {
    console.log(name, "not found");
    no++;
  }
}
console.log(data.length, "hit", hit, "no", no); // 3825 hit 2993 no 832
await Deno.writeTextFile(fn, CSV.stringify(data));
