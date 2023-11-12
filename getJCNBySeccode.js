import { CSV } from "https://js.sabae.cc/CSV.js";

const seccodes = await CSV.fetchJSON("data/seccode.csv");

export const getCompanyBySeccode = (seccode) => {
  if (seccode.length == 4) {
    seccode += "0";
  }
  const res = seccodes.find(s => s.証券コード == seccode);
  return res;
};

export const getJCNBySeccode = (seccode) => {
  const res = getCompanyBySeccode(seccode);
  if (!res) {
    return "";
  }
  return res.提出者法人番号;
};
