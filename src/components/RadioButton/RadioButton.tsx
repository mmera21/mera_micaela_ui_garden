import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $bg: string; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  max-width: 100%;

  @media (max-width: 600px) {
    display: flex;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  cursor: inherit;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name = 'radio',
  value = label,
  backgroundColor = '#e6f0ff',
  disabled = false,
  checked,
  onChange,
}) => (
  <Wrapper $bg={backgroundColor} $disabled={disabled}>
    <Input
      type="radio"
      name={name}
      value={value}
      disabled={disabled}
      checked={checked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(e.target.value)
      }
    />
    {label}
  </Wrapper>
);

export default RadioButton;