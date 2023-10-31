import { getEnv } from "https://js.sabae.cc/getEnv.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

// JCN = 法人番号
// EDINETコード = 開示書類等提出者（法人または個人等）ごとに発番される一意のコード
//   一文字目はEで、後ろ5桁の数字が続く6文字
// ファンドコード = ファンド（特定有価証券）ごとに発番される一意のコード
//   一文字目はGで、後ろ5桁の数字が続く6文字（EDINETコードに対して、複数付く）

/*
seqNumber ファイル日付ごとの連番です
docID 書類管理番号

edinetCode 提出者のEDINETコード
secCode 提出者の証券コード
JCN 提出者の法人番号（個人などの場合空欄）
filerName 提出者の名前
fundCode ファンドコード

ordinanceCode 府令コード
formCode 様式コード
docTypeCode 書類種別コード
periodStart 期間（自）
periodEnd 期間（至）
submitDateTime 提出日時
docDescription 「提出書類」欄に表 示される文字列
issuerEdinetCode 大量保有について発行会社の EDINETコード
subjectEdinetCode 公開買付けについて対象となる EDINETコード
subsidiaryEdinetCode 子会社の EDINETコード（カンマ区切りで最大10）
currentReportReason 臨時報告書の提出事由（カンマ区切りで複数）
parentDocID 親書類管理番号
opeDateTime 磁気ディスク提出及び紙面提出を行った日時
withdrawalStatus 取下書は"1"、取り下げられた書類 は"2"、それ以外は"0"
docInfoEditStatus 財務局職員が書類を修正した情報 は"1"、修正された書類は"2"、それ 以外は"0"が出力
disclosureStatus 財務局職員によって書類の不開示を 開始した情報は"1"、不開示とされて いる書類は"2"、財務局職員によっ て書類の不開示を解除した情報は "3"、それ以外は"0"
xbrlFlag 書類に XBRL がある場合は"1"、それ以外は"0"
pdfFlag 書類に PDF がある場合は"1"、それ以外は"0"
attachDocFlag 書類に代替書面・添付文書がある場合は"1"、それ以外は"0"
englishDocFlag 書類に英文ファイルがある場合は "1"、それ以外は"0"
*/

const API_KEY = await getEnv("EDINET_API_KEY");

export const download = async (dt) => {
  const base = "https://api.edinet-fsa.go.jp/api/v2/documents.json?type=2&date=";
  const url = base + dt + "&Subscription-Key=" + API_KEY;
  //console.log(url);
  const data = await (await fetch(url)).json();
  //await Deno.writeTextFile("data/" + dt + ".json", JSON.stringify(data, null, 2));
  //const data = JSON.parse(await Deno.readTextFile("data/" + dt + ".json"));
  await Deno.writeTextFile("data/documents/" + dt + ".csv", CSV.stringify(data.results));
  //console.log(data);
};
