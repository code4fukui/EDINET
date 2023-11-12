import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

export const getWikipediaFromJCN = async (jcn) => {
  const url = `https://ja.wikipedia.org/w/index.php?search=${jcn}&ns0=1`;
  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);
  //const div = dom.querySelector(".mw-search-results-container")
  const div = dom.querySelector(".mw-search-result-heading")
  if (!div) return null;
  const wiki = "https://ja.wikipedia.org" + div.querySelector("a").getAttribute("href");
  return wiki;
};

//console.log(await getWikipediaFromJCN("3011101042092"));
