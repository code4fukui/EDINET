import { fixBigNum } from "./fixBigNum.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple", () => {
  t.assertEquals(fixBigNum(1), "1");
  t.assertEquals(fixBigNum(10000), "1.00万");
  t.assertEquals(fixBigNum(100000), "10.0万");
  t.assertEquals(fixBigNum(1000000), "100万");
  t.assertEquals(fixBigNum(10000000), "0.10億");
  t.assertEquals(fixBigNum(100000000), "1.00億");
  t.assertEquals(fixBigNum(1000000000), "10.0億");
  t.assertEquals(fixBigNum(10000000000), "100億");
  t.assertEquals(fixBigNum(100000000000), "0.10兆");
});
Deno.test("mega", () => {
  t.assertEquals(fixBigNum(1, true), "100万");
  t.assertEquals(fixBigNum(10, true), "1000万");
  t.assertEquals(fixBigNum(100, true), "1.00億");
  t.assertEquals(fixBigNum(1000, true), "10.0億");
  t.assertEquals(fixBigNum(10000, true), "100億");
  t.assertEquals(fixBigNum(100000, true), "0.10兆");
  t.assertEquals(fixBigNum(1000000, true), "1.00兆");
  t.assertEquals(fixBigNum(10000000, true), "10.0兆");
  t.assertEquals(fixBigNum(100000000, true), "100兆");
  t.assertEquals(fixBigNum(1000000000, true), "0.10京");
  t.assertEquals(fixBigNum(10000000000, true), "1.00京");
  t.assertEquals(fixBigNum(100000000000, true), "10.0京");
  t.assertEquals(fixBigNum(1000000000000, true), "100京");
  t.assertEquals(fixBigNum(10000000000000, true), "1000京");
});
