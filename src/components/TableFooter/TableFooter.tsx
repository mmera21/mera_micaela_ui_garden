import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledFoot = styled.tfoot<{ $bg: string; $disabled: boolean }>`
  background-color: ${(p) => (p.$disabled ? '#cccccc' : p.$bg)};
  color: ${(p) => (p.$disabled ? '#666666' : '#1a1a1a')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
  font-weight: bold;

  td {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 600px) {
    td {
      padding: 0.5rem;
    }
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({
  text,
  colSpan = 1,
  backgroundColor = '#e6f0ff',
  disabled = false,
}) => (
  <StyledFoot
    data-testid="table-footer"
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <tr>
      <td colSpan={colSpan}>{text}</td>
    </tr>
  </StyledFoot>
);

export default TableFooter;