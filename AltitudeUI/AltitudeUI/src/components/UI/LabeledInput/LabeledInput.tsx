import React from 'react';
import { InputContainer, Label, InputField, ErrorMessage } from './LabeledInput.styled';

interface LabeledInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  id?: string;
  name?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  disabled = false,
  error,
  required = false,
  id,
  name
}) => {
  const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <InputContainer>
      <Label htmlFor={inputId}>
        {label}
        {required && <span style={{ color: '#FF6B6B', marginLeft: '4px' }}>*</span>}
      </Label>
      <InputField
        id={inputId}
        name={name || inputId}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default LabeledInput; 