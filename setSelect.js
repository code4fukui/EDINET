import { CSV } from "https://js.sabae.cc/CSV.js";
import { JAPAN_PREF } from "https://js.sabae.cc/JAPAN_PREF.js";

export const markets = {
  all: "全市場",
  P: "プライム",
  S: "スタンダード",
  G: "グロース",
};
export const setSelectMarket = (selmarket) => {
  for (const name in markets) {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = markets[name];
    selmarket.appendChild(opt);
  }
};

export const industry17 = await CSV.fetchJSON("./data/industry17.csv");
// type,name

export const setSelectIndustry = (selindustry) => {
  const opt = document.createElement("option");
  opt.value = "all";
  opt.textContent = "全産業";
  selindustry.appendChild(opt);
  for (const i of industry17) {
    const opt = document.createElement("option");
    opt.value = i.type;
    opt.textContent = i.name;
    selindustry.appendChild(opt);
  }
};

export const prefs = JAPAN_PREF;

export const setSelectPref = (selpref) => {
  const opt = document.createElement("option");
  opt.value = "all";
  opt.textContent = "日本";
  selpref.appendChild(opt);
  for (const name of prefs) {
    const opt = document.createElement("option");
    opt.textContent = name;
    selpref.appendChild(opt);
  }
};
