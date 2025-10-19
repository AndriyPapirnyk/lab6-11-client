import React from "react";
import "./Select.scss";

export interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    placeholder?: string;
    className?: string;
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    label,
    placeholder = "Select option",
    className = "",
}) => {
    return (
        <div className={`custom-select ${className}`}>
            {label && <label className="select-label">{label}</label>}
            <select value={value} onChange={onChange} className="select-input">
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
