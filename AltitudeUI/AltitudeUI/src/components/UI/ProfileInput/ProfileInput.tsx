import React from 'react';
import { InputLabel, InputField, InputText, CheckIcon } from './ProfileInput.styled';

interface ProfileInputProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password';
  showCheckIcon?: boolean;
  position: {
    labelLeft: number;
    labelTop: number;
    fieldLeft: number;
    fieldTop: number;
    textLeft: number;
    textTop: number;
    checkLeft?: number;
    checkTop?: number;
  };
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  type = 'text',
  showCheckIcon = false,
  position
}) => {
  const displayValue = type === 'password' ? '••••••••' : (value || 'Not provided');

  return (
    <>
      <InputLabel $left={position.labelLeft} $top={position.labelTop}>
        {label}
      </InputLabel>
      <InputField $left={position.fieldLeft} $top={position.fieldTop} />
      <InputText $left={position.textLeft} $top={position.textTop}>
        {displayValue}
      </InputText>
      {showCheckIcon && position.checkLeft && position.checkTop && (
        <CheckIcon $left={position.checkLeft} $top={position.checkTop} />
      )}
    </>
  );
};

export default ProfileInput; 