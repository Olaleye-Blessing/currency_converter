import { CgArrowsExchangeAltV } from "react-icons/cg";
import Input from "./Input";
import Select from "./Select";
import { SelectProps } from "../propTypes";
import { getCurrencyDetail } from "../utils/getCurrencyDetail";
import { Form } from "../styles/form";
import { Switch } from "../styles/Switch";

interface Props {
    currenciesLabel: SelectProps[];
    exchange: any;
    handleExchangeInfo: (name: string, value: {}) => void;
    handleSwitch: (e: React.MouseEvent<HTMLElement>) => void;
    result: number;
    loading: boolean;
}
const ExchangeForm: React.FC<Props> = ({
    currenciesLabel,
    exchange,
    handleExchangeInfo,
    handleSwitch,
    result,
    loading,
}) => {
    let { to, from } = exchange;

    let fromCurrenciesLabel: SelectProps[] = currenciesLabel.filter(
        ({ value }) => value !== to.code
    );

    let toCurrenciesLabel: SelectProps[] = currenciesLabel.filter(
        ({ value }) => value !== from.code
    );

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <section>
                <div>
                    <Input
                        name="from"
                        type="text"
                        id="fromCurrenyInput"
                        value={from.amount}
                        symbol={from.code}
                        label={from.symbol}
                        handleChange={(e) => {
                            let { name, value: amount } = e.target;

                            if (amount && !Number(amount)) {
                                return alert("pls enter a number");
                            }

                            if (amount.length > 9) return;

                            handleExchangeInfo(name, { amount });
                        }}
                    />
                </div>
                <div>
                    <Select
                        items={fromCurrenciesLabel}
                        id="fromCurrencySelect"
                        name="from"
                        label="from"
                        value={from.code}
                        handleChange={(e) => {
                            let { name, value } = e.target;
                            let {
                                symbol,
                                text,
                                value: code,
                            } = getCurrencyDetail(fromCurrenciesLabel, value);

                            handleExchangeInfo(name, {
                                code,
                                name: text,
                                symbol,
                            });
                        }}
                    />
                </div>
            </section>
            <Switch>
                <button onClick={handleSwitch}>
                    <CgArrowsExchangeAltV />
                </button>
            </Switch>
            <section>
                <div>
                    <Input
                        name="to"
                        type="text"
                        id="toCurrencyInput"
                        value={loading ? "loading..." : result}
                        symbol={to.code}
                        label={to.symbol}
                        disabled={true}
                        handleChange={(e) => {
                            let { name, value: amount } = e.target;
                            handleExchangeInfo(name, { amount });
                        }}
                    />
                </div>
                <div>
                    <Select
                        items={toCurrenciesLabel}
                        id="toCurrenySelect"
                        name="to"
                        label=""
                        value={to.code}
                        handleChange={(e) => {
                            let { name, value } = e.target;
                            let {
                                symbol,
                                text,
                                value: code,
                            } = getCurrencyDetail(toCurrenciesLabel, value);

                            handleExchangeInfo(name, {
                                code,
                                name: text,
                                symbol,
                            });
                        }}
                    />
                </div>
            </section>
        </Form>
    );
};

export default ExchangeForm;
