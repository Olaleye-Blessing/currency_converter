import { SelectProps } from "../propTypes";

export const getCurrencyDetail = (
    currencies: SelectProps[],
    code: string
): any => currencies.find(({ value }) => value === code);
