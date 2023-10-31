import { fetchInfo, fetchInfoSummary } from "https://code4fukui.github.io/gBizINFO/fetchInfo.js";

// set GBIZ_ACCESS_TOKEN in .env

export const getInfoByJCN = async (jcn) => {
  //return await fetchInfo(jcn);
  return await fetchInfoSummary(jcn);
};
