import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: 0.75rem 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  backgroundColor = '#ffffff',
  disabled = false,
}) => (
  <StyledCell
    data-testid="table-cell"
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {children}
  </StyledCell>
);

export default TableCell;