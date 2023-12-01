   Number.prototype.formatMoney = function(e, t, i, o, n, s) {
    const a = e.toString().split(".")
      , r = a[0];
    let l = a[1];
    void 0 === l || "0" === l ? l = "00" : 1 == l.length && "0" != l && (l *= 10);
    const c = r.replace(/\B(?=(\d{3})+(?!\d))/g, i);
    return "end" === o ? s ? c + n : c + t + l + n : s ? n + c : n + c + t + l
}
,
Number.prototype.formatMoneyInternational = function(e, t) {
    var i = t || !1;
    const o = {
        CH: {
            symbol: " CHF",
            symbolPosition: "end",
            decimal: ".",
            comma: "'"
        },
        CA: {
            symbol: "C$",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        US: {
            symbol: "$",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        UK: {
            symbol: "£",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        CZ: {
            symbol: " Kč",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        DK: {
            symbol: " kr",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        SE: {
            symbol: " kr",
            symbolPosition: "end",
            decimal: ",",
            comma: " "
        },
        IL: {
            symbol: "$",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        PL: {
            symbol: " zł",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        NO: {
            symbol: " kr",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        AT: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        BE: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        JP: {
            symbol: " 円",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        BR: {
            symbol: "$",
            symbolPosition: "begin",
            decimal: ",",
            comma: "."
        },
        DE: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: " "
        },
        FR: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: " "
        },
        ES: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        PT: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        IE: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        EMEA_EUROPE: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        FI: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        IT: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        NL: {
            symbol: " €",
            symbolPosition: "end",
            decimal: ",",
            comma: "."
        },
        MX: {
            symbol: "$",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        LAMERICA: {
            symbol: "$",
            symbolPosition: "begin",
            decimal: ".",
            comma: ","
        },
        SG: {
            symbol: " SGD",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        MY: {
            symbol: " MYR",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        HK: {
            symbol: " HKD",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        AU: {
            symbol: " AUD",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        AE: {
            symbol: " AED",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        SA: {
            symbol: " SAR",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        ZA: {
            symbol: " ZAR",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        KR: {
            symbol: " KRW",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        NZ: {
            symbol: " NZD",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        TR: {
            symbol: " TRY",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        APAC: {
            symbol: " HKD",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        EMEA_MIDDLEEAST: {
            symbol: " AED",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        RU: {
            symbol: " RUB",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        },
        IN: {
            symbol: " INR",
            symbolPosition: "end",
            decimal: ".",
            comma: ","
        }
    };
    var n = this;
    if ("N/A" == n)
        return n;
    {
        n = parseFloat(this);
        const t = o[e];
        return n.formatMoney(n, t.decimal, t.comma, t.symbolPosition, t.symbol, i)
    }
}
,
String.prototype.formatMoneyInternational = Number.prototype.formatMoneyInternational;
