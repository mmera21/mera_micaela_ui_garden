import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $bg: string }>`
  background-color: ${(p) => (p.disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.disabled ? '#666666' : '#ffffff')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  max-width: 240px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = '#0066cc',
  disabled = false,
  onClick,
}) => (
  <StyledButton $bg={backgroundColor} disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;