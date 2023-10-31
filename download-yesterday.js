import { Day } from "https://js.sabae.cc/DateTime.js";
import { download } from "./download.js";

const dt = new Day().dayBefore(1).toString();
await download(dt);
