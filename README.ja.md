# EDINET

日本の電子開示システム「EDINET」から取得したデータを、クロスオリジン（CORS）対応のCSV形式で提供するプロジェクトです。

## デモ & データ

### ダッシュボード
- [東証上場企業ダッシュボード（カラム地図）](https://code4fukui.github.io/EDINET/)
- [時価総額円グラフ](https://code4fukui.github.io/EDINET/piechart.html)
- [時価総額ツリーマップ](https://code4fukui.github.io/EDINET/treemap.html)

### データファイル
- [日次開示書類一覧](data/documents)
- [EDINETコード一覧](data/edinetcode.csv)
- [東証上場企業一覧](data/seccode.csv) ([シンプルビューア](https://code4fukui.github.io/EDINET/seccode.html))

## 特徴
- 日次のEDINET開示書類一覧をCSV形式で提供。
- EDINETコード一覧および東証上場企業とのマッピング。
- GitHub Actionsによる毎日の自動データ更新（UTC 08:18実行）。
- すべてのCSVデータはCORS対応済みであり、Webアプリケーションから簡単に利用可能。
- [gBizINFO](https://github.com/code4fukui/gBizINFO/) を利用し、企業データに法人番号（JCN）および基本情報を付与。

## 開発

### 前提条件
- [Deno](https://deno.land/) (v1.x)
- ルートディレクトリに `.env` ファイルを作成し、APIキーを設定してください：
  ```
  EDINET_API_KEY=YOUR_EDINET_API_KEY
  GBIZ_ACCESS_TOKEN=YOUR_GBIZINFO_TOKEN
  ```

### 使い方
最新の日次開示書類を取得するには：
```sh
deno run -A download-today.js
```

東証上場企業一覧を更新するには：
```sh
# 1. 日本取引所グループ（JPX）から最新の一覧をダウンロード
deno run -A download-dataj.js

# 2. 上場企業マスターリストを更新
deno run -A make-listedcompany.js
```

## 関連プロジェクト
- [gBizINFO](https://github.com/code4fukui/gBizINFO/)

## データソース
- [EDINET API仕様書](https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html)
- [EDINETタクソノミ及びコードリストのダウンロード](https://disclosure2.edinet-fsa.go.jp/weee0010.aspx)
- [東証上場銘柄一覧 - 日本取引所グループ](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

## ライセンス
MIT License
