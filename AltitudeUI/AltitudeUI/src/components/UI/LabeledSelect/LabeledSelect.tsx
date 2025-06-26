import React from 'react';
import { SelectContainer, Label, SelectField, SelectArrow, ErrorMessage } from './LabeledSelect.styled';

interface Option {
    value: string;
    label: string;
}

interface LabeledSelectProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    id?: string;
    name?: string;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
    label,
    value,
    onChange,
    options,
    placeholder = "Select an option",
    disabled = false,
    error,
    required = false,
    id,
    name
}) => {
    const selectId = id || name || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <SelectContainer>
            <Label htmlFor={selectId}>
                {label}
                {required && <span style={{ color: '#FF6B6B', marginLeft: '4px' }}>*</span>}
            </Label>
            <SelectField
                id={selectId}
                name={name || selectId}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            >
                <option value="" disabled style={{ color: '#AEAEAE' }}>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectField>
            <SelectArrow>▼</SelectArrow>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectContainer>
    );
};

export default LabeledSelect; 