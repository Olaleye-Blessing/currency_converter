import { Currency } from "../propTypes";
import currencies from "./currency.json";

export let currenciesArray: Currency[] = Object.values(currencies)
    .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
    .map(({ code, name, symbol, symbol_native }) => ({
        code,
        name,
        symbol,
        symbol_native,
    }));
