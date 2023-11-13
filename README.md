# EDINET
 
オープンデータとして提供される、電子情報開示システム「EDINET」をクロスオリジン対応のCSV形式で提供する

- [日別文書一覧](data/documents)
- [EDINETコード一覧](data/edinetcode.csv)
- [東証上場企業ダッシュボード](https://code4fukui.github.io/EDINET/)
- [東証上場企業一覧](data/seccode.csv) （[アプリ](https://code4fukui.github.io/EDINET/seccode.html))

## 関連

- [gBizINFO](https://github.com/code4fukui/gBizINFO/)

## 出典

- [EDINET](https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html)
- [EDINETタクソノミ及びコードリストダウンロード](https://disclosure2.edinet-fsa.go.jp/weee0010.aspx)
- [東証上場銘柄一覧（2023年9月末） - その他統計資料 | 日本取引所グループ](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

## update

### 上場企業一覧

```sh
deno run -A download-dataj.js
```
→ data/data_j.csv

```sh
deno run -A make-listedcompany.js
```
→ data/listed_company.csv
→ update data/seccode_append.csv

## todo

- EDINETcodeに法人番号未記載のものの修正
