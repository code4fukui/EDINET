import { CSV } from "https://js.sabae.cc/CSV.js";

const seccodes = await CSV.fetchJSON("data/seccode.csv");

export const getJCNBySeccode = (seccode) => {
  if (seccode.length == 4) {
    seccode += "0";
  }
  const res = seccodes.find(s => s.証券コード == seccode);
  if (!res) {
    return "";
  }
  return res.提出者法人番号;
};
