import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
  test('is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Data</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByTestId('table-cell')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Data</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByTestId('table-cell')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});