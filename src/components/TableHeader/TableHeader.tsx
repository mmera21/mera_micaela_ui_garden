import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledHead = styled.thead<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#ffffff')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};

  th {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  @media (max-width: 600px) {
    th {
      padding: 0.5rem;
    }
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  backgroundColor = '#0066cc',
  disabled = false,
}) => (
  <StyledHead
    data-testid="table-header"
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <tr>
      {columns.map((c) => (
        <th key={c}>{c}</th>
      ))}
    </tr>
  </StyledHead>
);

export default TableHeader;