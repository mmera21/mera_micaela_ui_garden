import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  border-bottom: 1px solid #dddddd;
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor = '#ffffff',
  disabled = false,
}) => (
  <StyledRow
    data-testid="table-row"
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {children}
  </StyledRow>
);

export default TableRow;