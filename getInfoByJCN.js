import { fetchInfo, fetchInfoSummary } from "https://code4fukui.github.io/gBizINFO/fetchInfo.js";
import { GBizINFO } from "https://code4fukui.github.io/gBizINFO/GBizINFO.js";

// set GBIZ_ACCESS_TOKEN in .env

const gbiz = new GBizINFO();

export const getInfoByJCN = async (jcn) => {
  //return await fetchInfo(jcn);
  //return await fetchInfoSummary(jcn);
  return await gbiz.getBasic(jcn);
};

//console.log(await getInfoByJCN("3011101042092"));
