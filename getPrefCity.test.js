import * as t from "https://deno.land/std/testing/asserts.ts";
import { getPrefCity } from "./getPrefCity.js";

Deno.test("simple", () => {
  t.assertEquals(getPrefCity("福井県鯖江市横越町"), { pref: "福井県", city: "鯖江市" });
  t.assertEquals(getPrefCity("東京都渋谷区代々木"), { pref: "東京都", city: "渋谷区" });
  t.assertEquals(getPrefCity("北海道札幌市中央区"), { pref: "北海道", city: "札幌市" });
});
Deno.test("gun", () => {
  t.assertEquals(getPrefCity("岡山県浅口郡里庄町大字"), { pref: "岡山県", city: "里庄町" });
});
