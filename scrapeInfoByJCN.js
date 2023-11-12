import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

/*
export const scrapeInfoByJCN_houjin = async (jcn) => { // NG
  const url = `https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=${jcn}`;
  const text = await (await fetch(url)).text();
  await Deno.writeTextFile("_scrapeJCN_houjin.html", text);  
  const dom = HTMLParser.parse(text);
  const token = dom.querySelector("form#appForm input").getAttribute("value");
  console.log(token);
  return token;
};
*/

/*
				<div class="cp-container">
		<h2 class="cp-h2">法人基本情報（3情報）</h2>
		<div>
			<span>法人基本情報（３情報）に掲載の内容は</span>
			<span><a class="cp-contents-link2" href="https://www.houjin-bangou.nta.go.jp/" target="_blank" rel="noopener noreferrer">法人番号公表サイト</a></span>
			<span>から取得しています。</span>
		</div>
		<dl class="dl-horizontal cp-dl-horizontal">
			<dt>法人番号</dt>
			<dd>3011101042092</dd>
			<dt>法人名</dt>
			<dd>株式会社ｊｉｇ．ｊｐ</dd>
			<dt>法人名ふりがな</dt>
			<dd>じぐじぇーぴー</dd>
			<dt class="cp-dl-horizontal-none">法人名英語</dt>
			<dd></dd>
			<dt>本店所在地</dt>
			<dd>福井県鯖江市横越町第１０号３４番地１</dd>
			
		</dl>
	</div>
*/

export const scrapeInfoByJCN = async (jcn) => {
  const url = `https://info.gbiz.go.jp/hojin/ichiran?hojinBango=${jcn}`;
  const text = await (await fetch(url)).text();
  //await Deno.writeTextFile("_scrapeJCN.html", text);  
  const dom = HTMLParser.parse(text);
  const divs = dom.querySelectorAll("div.cp-container");
  for (const div of divs) {
    const h2 = div.querySelector("h2");
    if (h2.text != "法人基本情報（3情報）") continue;
    const dts = div.querySelectorAll("dl dt");
    const dds = div.querySelectorAll("dl dd");
    const res = {};
    for (let i = 0; i < dts.length; i++) {
      res[dts[i].text] = dds[i].text;
    }
    return res;
  }
  return null;
};

//console.log(await scrapeInfoByJCN("3011101042092"));
