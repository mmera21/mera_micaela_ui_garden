import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ $bg: string; $disabled: boolean }>`
  display: inline-block;
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  max-width: 100%;

  @media (max-width: 600px) {
    display: block;
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor = '#e6f0ff',
  disabled = false,
  htmlFor,
}) => (
  <StyledLabel $bg={backgroundColor} $disabled={disabled} htmlFor={htmlFor}>
    {text}
  </StyledLabel>
);

export default Label;