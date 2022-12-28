import { Day } from "https://js.sabae.cc/DateTime.js";
import { download } from "./download.js";

//const dt = "2022-12-24";
const dt = new Day().toString();
await download(dt);
