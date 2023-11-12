import { fetchBin } from "https://js.sabae.cc/fetchBin.js";
import { XLSX } from "https://taisukef.github.io/sheetjs-es/es/XLSX.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://www.jpx.co.jp/markets/statistics-equities/misc/tvdivq0000001vg2-att/data_j.xls";
const bin = await fetchBin(url);
const ws = XLSX.decode(bin);
const csv = XLSX.toCSV(ws);
await Deno.writeTextFile("./data/data_j.csv", CSV.encode(csv));
