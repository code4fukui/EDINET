import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const url = "https://code4fukui.github.io/localgovjp/localgovjp-utf8.csv";
const data = await CSV.fetchJSON(url);
const prefs = ArrayUtil.toUnique(data.map(d => d.pref));

export const getPref = (adr) => {
  for (const p of prefs) {
    if (adr.startsWith(p)) {
      return p;
    }
  }
  return null;
};

export const getPrefCity = (adr) => {
  const p = getPref(adr);
  if (!p) {
    return null;
  }
  const adr2 = adr.substring(p.length);
  const cities = data.filter(d => d.pref == p).map(c => c.city.replace(/\s/g, ""));
  for (const c of cities) {
    if (adr2.startsWith(c)) {
      return { pref: p, city: c };
    }
  }
  const n = adr2.indexOf("郡");
  if (n >= 0) {
    const adr3 = adr2.substring(n + 1);
    for (const c of cities) {
      if (adr3.startsWith(c)) {
        return { pref: p, city: c };
      }
    }
  }
  return { pref: p, city: null };
};
