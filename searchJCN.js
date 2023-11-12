import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

const fetchHTML = async (name) => {
  const body = `jp.go.nta.houjin_bangou.framework.web.common.CNSFWTokenProcessor.request.token=d13ab817-1e0f-4cfc-aa29-908bde285960&houzinNmShTypeRbtn=2&houzinNmTxtf=${encodeURIComponent(name)}&_kanaCkbx=on&_noconvCkbx=on&_enCkbx=on&houzinAddrShTypeRbtn=1&prefectureLst=&houzinNoShTyoumeSts=0&kokugaiTxtf=&zipCdTxtf=&prefectureLstEn=&kokugaiTxtfEn=&houzinNoShSonotaZyoukenSts=0&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_houzinKdCkbx=on&_historyCkbx=on&_hideCkbx=on&closeCkbx=1&_closeCkbx=on&_chgYmdShTargetCkbx=on&chgYmdEyFromLst=000&chgYmdMFromLst=00&chgYmdDFromLst=00&chgYmdEyToLst=000&chgYmdMToLst=00&chgYmdDToLst=00&orderRbtn=1&houzinKdRbtn=0&_historyCkbx=on&orderRbtnEn=1&houzinNoTxtf=&searchFlg=1&preSyousaiScreenId=KJSCR0101010`;

  const url = "https://www.houjin-bangou.nta.go.jp/kensaku-kekka.html";
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  };

  const method = "POST";
  const res = await fetch(url, { method, headers, body });
  const text = await res.text();
  return text;
};

export const searchJCN = async (name) => {
  const n = name.indexOf("（");
  if (n >= 0) {
    name = name.substring(0, n);
  }
  //const text = await Deno.readTextFile("_searchJCN.html");
  const text = await fetchHTML(name);
  const dom = HTMLParser.parse(text);
  const jcn = dom.querySelector("div.tbl01 tbody th")?.text?.trim();
  return jcn;
};

//  const name = "jig.jp";
/*
const name = "株式会社京都フィナンシャルグループ";
//const text = await fetchHTML(name);
//await Deno.writeTextFile("_searchJCN.html", text);
const jcn = await searchJCN(name);
console.log(jcn);
*/

/*
                                <div class="tbl01">
                                    <table class="fixed normal">
                                        <thead>
                                            <tr>
                                                <th class="w18" scope="col">法人番号</th>
                                                <th class="w30" scope="col">商号又は名称</th>
                                                <th class="w37" scope="col">所在地</th>
                                                <th class="w16" scope="col">変更履歴情報等</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                <tr>
                                                    <th scope="row">
                                                        3011101042092
                                                        
                                                    </th>
                                                    <td>
                                                        
                                                        
                                                            <div class="furigana">ジグジェーピー</div>
                                                        
                                                        株式会社ｊｉｇ．ｊｐ
                                                        
                                                    </td>
*/
