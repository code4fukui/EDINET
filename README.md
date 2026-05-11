# EDINET

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

オープンデータとして提供される、電子情報開示システム「EDINET」をクロスオリジン対応のCSV形式で提供する
This project provides CORS-enabled CSV data from Japan's Electronic Disclosure for Information NETwork (EDINET).

## Demos & Data

### Dashboards
- [TSE Listed Company Dashboard (Column Map)](https://code4fukui.github.io/EDINET/)
- [Market Cap Pie Chart](https://code4fukui.github.io/EDINET/piechart.html)
- [Market Cap Treemap](https://code4fukui.github.io/EDINET/treemap.html)

### Data Files
- [Daily Document List](data/documents)
- [EDINET Code List](data/edinetcode.csv)
- [TSE Listed Company List](data/seccode.csv) ([Simple Viewer](https://code4fukui.github.io/EDINET/seccode.html))

## Features
- Daily EDINET document listings in CSV format.
- EDINET code list and mappings for TSE-listed companies.
- Automated daily data updates via GitHub Actions (runs at 08:18 UTC).
- All CSV data is CORS-enabled for easy use in web applications.
- Enriches company data with corporate numbers (JCN) and basic information using [gBizINFO](https://github.com/code4fukui/gBizINFO/).

## Development

### Prerequisites
- [Deno](https://deno.land/) (v1.x)
- Create a `.env` file in the root directory with your API keys:
  ```
  EDINET_API_KEY=YOUR_EDINET_API_KEY
  GBIZ_ACCESS_TOKEN=YOUR_GBIZINFO_TOKEN
  ```

### Usage
To fetch the latest daily disclosure documents:
```sh
deno run -A download-today.js
```

To update the list of TSE-listed companies:
```sh
# 1. Download the latest list from the Japan Exchange Group (JPX)
deno run -A download-dataj.js

# 2. Update the master list of listed companies
deno run -A make-listedcompany.js
```

## Related Projects
- [gBizINFO](https://github.com/code4fukui/gBizINFO/)

## Data Sources
- [EDINET API Guide](https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html)
- [EDINET Taxonomy and Code List Download](https://disclosure2.edinet-fsa.go.jp/weee0010.aspx)
- [TSE Listed Stocks List - Japan Exchange Group](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

## License
MIT License