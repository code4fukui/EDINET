import { CSV } from "https://js.sabae.cc/CSV.js";

// JCN = 法人番号
/*
seqNumber
docID
edinetCode
secCode
JCN 法人番号（個人などの場合空欄）
filerName
fundCode
ordinanceCode
formCode
docTypeCode
periodStart
periodEnd
submitDateTime
docDescription
issuerEdinetCode
subjectEdinetCode
subsidiaryEdinetCode
currentReportReason
parentDocID
opeDateTime
withdrawalStatus
docInfoEditStatus
disclosureStatus
xbrlFlag
pdfFlag
attachDocFlag
englishDocFlag
*/

export const download = async (dt) => {
  const base = "https://disclosure.edinet-fsa.go.jp/api/v1/documents.json?type=2&date=";
  const url = base + dt;
  console.log(url);
  const data = await (await fetch(url)).json();
  //await Deno.writeTextFile("data/" + dt + ".json", JSON.stringify(data, null, 2));
  //const data = JSON.parse(await Deno.readTextFile("data/" + dt + ".json"));
  await Deno.writeTextFile("data/documents/" + dt + ".csv", CSV.stringify(data.results));
  //console.log(data);
};
