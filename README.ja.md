# EDINET

EDINETのオープンデータが、クロスオリジン対応のCSV形式で提供されています。

## 機能

- [日次の提出書類一覧](data/documents)
- [EDINETコード一覧](data/edinetcode.csv)
- [東証上場企業ダッシュボード](https://code4fukui.github.io/EDINET/)
- [東証上場企業一覧](data/seccode.csv) ([アプリ](https://code4fukui.github.io/EDINET/seccode.html))

## 関連

- [gBizINFO](https://github.com/code4fukui/gBizINFO/)

## データ・API

- [EDINET](https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html)
- [EDINETタクソノミ及びコードリストダウンロード](https://disclosure2.edinet-fsa.go.jp/weee0010.aspx)
- [東証上場銘柄一覧 (2023年10月末現在) - その他の統計データ | 日本取引所グループ](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

## 更新

### 上場企業一覧

```sh
deno run -A download-dataj.js
```
→ data/data_j.csv

```sh
deno run -A make-listedcompany.js
```
→ 更新: data/listed_company.csv
→ 更新: data/seccode_append.csv

## TODO

- EDINETコードに企業番号がないものを修正する