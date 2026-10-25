import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'text')};
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 100%;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  backgroundColor = '#f5f5f5',
  disabled = false,
}) => (
  <StyledText $bg={backgroundColor} $disabled={disabled}>
    {text}
  </StyledText>
);

export default Text;