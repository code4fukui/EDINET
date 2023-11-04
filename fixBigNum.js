import { Num } from "https://js.sabae.cc/Num.js";

export const fixBigNum = (n, mega = false) => {
  const units = mega ? ["万", "億", "兆", "京"] : ["", "万", "億", "兆"];
  if (mega) {
    n *= 100;
  }
  if (n < 10000) {
    return n + units[0];
  } else if (n < 100000) {
    return Num.fixfloat(n / 10000, 2) + units[1];
  } else if (n < 1000000) {
    return Num.fixfloat(n / 10000, 2) + units[1];
  } else if (n < 10000000) {
    return Num.fixfloat(n / 10000, 1) + units[1];
  } else if (n < 100000000) {
    //return Math.floor(n / 10000) + units[1]; // 1000億
    return Num.fixfloat(n / 10000 / 10000, 2) + units[2]; // 0.10兆
  } else if (n < 1000000000) {
    return Num.fixfloat(n / 10000 / 10000, 2) + units[2];
  } else if (n < 10000000000) {
    return Num.fixfloat(n / 10000 / 10000, 2) + units[2];
  } else if (n < 100000000000) {
    return Num.fixfloat(n / 10000 / 10000, 1) + units[2];
  } else if (n < 1000000000000) {
    //return Math.floor(n / 10000 / 10000) + units[2];
    return Num.fixfloat(n / 10000 / 10000 / 10000, 2) + units[3];
  } else if (n < 10000000000000) {
    return Num.fixfloat(n / 10000 / 10000 / 10000, 2) + units[3];
  } else if (n < 100000000000000) {
    return Num.fixfloat(n / 10000 / 10000 / 10000, 2) + units[3];
  } else if (n < 1000000000000000) {
    return Num.fixfloat(n / 10000 / 10000 / 10000, 1) + units[3];
  } else {
    return Math.floor(n / 10000 / 10000 / 10000) + units[3];
  }
  /*
  if (yen_m > 1000 * 10000) {
    return Num.fixfloat(yen_m / 1000 / 10000, 2) + "京円";
  }
  if (yen_m > 1000) {
    return Math.floor(yen_m / 1000) + "兆円";
  }
  return Num.fixfloat(yen_m / 1000, 1) + "兆円";
  */
};
