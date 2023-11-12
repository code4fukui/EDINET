import { CSV } from "https://js.sabae.cc/CSV.js";
import { SJIS } from "https://js.sabae.cc/SJIS.js";
import { unzip } from "https://taisukef.github.io/zlib.js/es/unzip.js";

const fn = "data/Edinetcode_20231031.zip";
const zip = await Deno.readFile(fn);

const zips = unzip(zip);
const filenames = zips.getFilenames();
const bin = zips.decompress(filenames[0]);
const csv = CSV.decode(SJIS.decode(bin));
csv.splice(0, 1);
await Deno.writeTextFile("data/edinetcode.csv", CSV.encode(csv));
