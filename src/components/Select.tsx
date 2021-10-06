import { SelectProps } from "../propTypes";

export interface Props {
    items: SelectProps[];
    id: string;
    name: string;
    label: string;
    value: string;
    handleChange: React.ChangeEventHandler<
        HTMLSelectElement | HTMLInputElement
    >;
}

const Select: React.FC<Props> = ({
    items,
    id,
    name,
    label,
    value,
    handleChange,
}) => {
    return (
        <>
            <label htmlFor={id} className="dropdown">
                ^
            </label>
            <select
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                data-selected-symbol={`r`}
            >
                {items.map(({ text, value }) => (
                    <option key={text} value={value}>
                        {text}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
