import { CSV } from "https://js.sabae.cc/CSV.js";
import { SJIS } from "https://js.sabae.cc/SJIS.js";
import { unzip } from "https://taisukef.github.io/zlib.js/es/unzip.js";

// NG

const url = `https://disclosure2.edinet-fsa.go.jp/weee0010.aspx?c01d04b1610243d2a2af23e7952e8b188f263f1743d98c45d42375f60fa02a4a,gx-no-cache=169`;
const post = JSON.parse(`{
  "MPage": false,
  "cmpCtx": "",
  "parms": [
    "WEEE0010",
    "EDINETタクソノミ及びコードリストダウンロード指定画面"
  ],
  "hsh": [
    {
      "hsh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJneC1pc3N1ZXIiOiIiLCJneC1wZ20iOiJXRUVFMDAxMCIsImd4LXZhbCI6IldFRUUwMDEwIiwiZ3gtZXhwIjoiMTcwMDAzMTkwMi4wNzc5NyIsIm5iZiI6MTY5ODcwMzUwMiwiZXhwIjoxNjk5OTk5NTAyLCJpYXQiOjE2OTg3MDM1MDJ9.Y_yjAJEdan9t862x7p3QruC4GSnjQuoRzuubi_xVYBc",
      "row": ""
    },
    {
      "hsh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJneC1pc3N1ZXIiOiIiLCJneC1wZ20iOiJXRUVFMDAxMCIsImd4LXZhbCI6IkVESU5FVOOCv-OCr-OCveODjuODn-WPiuOBs-OCs-ODvOODieODquOCueODiOODgOOCpuODs-ODreODvOODieaMh-WumueUu-mdoiIsImd4LWV4cCI6IjE3MDAwMzE5MDIuMDc3OTciLCJuYmYiOjE2OTg3MDM1MDIsImV4cCI6MTY5OTk5OTUwMiwiaWF0IjoxNjk4NzAzNTAyfQ.R7oBqZ14h2NtpdCN2nahwGPD8z8EcXNyLormB1Sef1g",
      "row": ""
    }
  ],
  "objClass": "weee0010",
  "pkgName": "GeneXus.Programs",
  "events": [
    "'DODOWNLOADEDINET'"
  ],
  "grids": {}
}`);
const opt = {
  method: "POST",
  cache: "no-cache",
  headers: { "Content-Type": "application/json" },
  body: post,
};
const res = await fetch(url, opt);
console.log(res); // エラーになる

// -> make-seccode.js