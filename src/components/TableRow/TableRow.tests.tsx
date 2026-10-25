import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Data</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByTestId('table-row')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Data</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByTestId('table-row')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});