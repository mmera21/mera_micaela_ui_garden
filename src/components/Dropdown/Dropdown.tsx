import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $bg: string }>`
  background-color: ${(p) => (p.disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: 0.6rem 1rem;
  border: 1px solid #999999;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  max-width: 280px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label = 'Dropdown',
  backgroundColor = '#ffffff',
  disabled = false,
  onChange,
}) => (
  <StyledSelect
    aria-label={label}
    $bg={backgroundColor}
    disabled={disabled}
    onChange={(e) => onChange && onChange(e.target.value)}
  >
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;