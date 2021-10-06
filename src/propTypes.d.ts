export interface InputElement {
    type: string;
    value: string | number;
    name: string;
    id: string;
    label: string;
    symbol: string;
    disabled?: boolean | false;
    handleChange: React.ChangeEventHandler<
        HTMLSelectElement | HTMLInputElement
    >;
}

export interface SelectProps {
    text: string;
    value: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
    symbol_native: string;
}

export interface ExchangeComp {
    code: string;
    name: string;
    symbol: string;
    amount: number;
}

export interface Exchange {
    from: ExchangeComp;
    to: { code: string; name: string; symbol: string };
}

export type Currencies = Currency[];
