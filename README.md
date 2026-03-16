# EDINET

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

The EDINET (Electronic Disclosure for Investors' NETwork) open data is provided in cross-origin compliant CSV format.

## Features

- [Daily document list](data/documents)
- [EDINET code list](data/edinetcode.csv)
- [Tokyo Stock Exchange listed company dashboard](https://code4fukui.github.io/EDINET/)
- [Tokyo Stock Exchange listed company list](data/seccode.csv) ([App](https://code4fukui.github.io/EDINET/seccode.html))

## Related

- [gBizINFO](https://github.com/code4fukui/gBizINFO/)

## Sources

- [EDINET](https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html)
- [EDINET taxonomy and code list download](https://disclosure2.edinet-fsa.go.jp/weee0010.aspx)
- [List of TSE-listed issues (as of the end of October 2023) - Other Statistical Data | Japan Exchange Group](https://www.jpx.co.jp/markets/statistics-equities/misc/01.html)

## Update

### Listed Company List

```sh
deno run -A download-dataj.js
```
→ data/data_j.csv

```sh
deno run -A make-listedcompany.js
```
→ update data/listed_company.csv
→ update data/seccode_append.csv

## Todo

- Fix EDINET codes without corporate number

## License

MIT License — see [LICENSE](LICENSE).