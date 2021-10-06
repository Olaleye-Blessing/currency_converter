import { useEffect, useState } from "react";
import ExchangeForm from "./components/ExchangeForm";
import { Exchange, SelectProps } from "./propTypes";
import { currenciesArray } from "./utils/currenciesArray";
import GlobalStyles from "./styles/global";

const App = () => {
    let currenciesLabel: SelectProps[] = currenciesArray.map(
        ({ code, name, symbol }) => ({
            value: code,
            text: name,
            symbol,
        })
    );
    const [exchangeInfo, setExchangeInfo] = useState<Exchange>({
        from: {
            code: "USD",
            name: "US Dollar",
            symbol: "$",
            amount: 1,
        },
        to: {
            code: "NGN",
            name: "Nigeria Naira",
            symbol: "₦",
        },
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<number>(0);

    const handleExchangeInfo = (name: string, value: {}): void => {
        let oldExchange = { ...exchangeInfo };
        if (name === "from") {
            oldExchange.from = {
                ...oldExchange.from,
                ...value,
            };
        } else {
            oldExchange.to = {
                ...oldExchange.to,
                ...value,
            };
        }
        setExchangeInfo(oldExchange);

        // setExchangeInfo({
        //     ...exchangeInfo,
        //     [name]: { ...exchangeInfo[name], ...value },
        // });
    };

    const handleSwitch = (e: React.MouseEvent<HTMLElement>) => {
        setExchangeInfo((prev) => ({
            from: { ...prev.to, amount: result },
            to: { ...prev.from },
        }));
    };

    useEffect(() => {
        let { to, from } = exchangeInfo;

        if (!from.amount) return;

        setLoading(true);
        let abortFetch = new AbortController();

        let url: URL = new URL(
            `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert`
        );

        url.searchParams.set("from", from.code);
        url.searchParams.set("to", to.code);
        url.searchParams.set("amount", String(from.amount));

        let headers = new Headers();

        headers.set(
            "x-rapidapi-host",
            String(process.env.REACT_APP_X_RAPIDAPI_HOST)
        );
        headers.set("x-rapidapi-key", String(process.env.REACT_APP_RAPID_KEY));

        fetch(url.href, { headers, signal: abortFetch.signal })
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((data) => {
                setLoading(false);
                let { result } = data;
                setResult(+Number(result).toFixed(2));
            })
            .catch((e) => {
                if (e.name !== "AbortError") {
                    setError("There is an error");
                    setLoading(false);
                }
            });

        return () => abortFetch.abort();
    }, [exchangeInfo]);

    return (
        <>
            <GlobalStyles />
            <header>
                <h1>Currency Converter</h1>
            </header>
            <main>
                <ExchangeForm
                    exchange={exchangeInfo}
                    handleExchangeInfo={handleExchangeInfo}
                    handleSwitch={handleSwitch}
                    currenciesLabel={currenciesLabel}
                    result={result}
                    loading={loading}
                />
            </main>
        </>
    );
};

export default App;
