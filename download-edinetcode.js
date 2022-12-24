import { CSV } from "https://js.sabae.cc/CSV.js";
import { SJIS } from "https://js.sabae.cc/SJIS.js";
import { unzip } from "https://taisukef.github.io/zlib.js/es/unzip.js";

const url = `https://disclosure.edinet-fsa.go.jp/E01EW/download?uji.verb=W1E62071EdinetCodeDownload&uji.bean=ee.bean.W1E62071.EEW1E62071Bean&TID=W1E62071&PID=W1E62071&SESSIONKEY=1671887699746&downloadFileName=&lgKbn=2&dflg=0&iflg=0&dispKbn=1`;
const zip = new Uint8Array(await (await fetch(url)).arrayBuffer());
const zips = unzip(zip);
const filenames = zips.getFilenames();
const bin = zips.decompress(filenames[0]);
const csv = CSV.decode(SJIS.decode(bin));
csv.splice(0, 1);
await Deno.writeTextFile("data/edinetcode.csv", CSV.encode(csv));

const data = CSV.toJSON(csv);
const sec = data.filter(d => d.上場区分 == "上場");
await Deno.writeTextFile("data/seccode.csv", CSV.stringify(sec));

