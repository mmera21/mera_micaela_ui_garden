import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<{ $bg: string; $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  backgroundColor = '#ffffff',
  disabled = false,
}) => (
  <Wrapper>
    <StyledTable
      data-testid="table"
      $bg={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </StyledTable>
  </Wrapper>
);

export default Table;