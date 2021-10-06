import { InputElement } from "../propTypes";

const Input: React.FC<InputElement> = ({
    type,
    value,
    name,
    id,
    label,
    symbol,
    handleChange,
    disabled,
}) => {
    return (
        <>
            <label htmlFor={id}>
                <span>{label}</span>
                <input
                    onChange={handleChange}
                    name={name}
                    type={type}
                    id={id}
                    value={value}
                    disabled={disabled}
                />
                <span>{symbol}</span>
            </label>
        </>
    );
};

export default Input;
