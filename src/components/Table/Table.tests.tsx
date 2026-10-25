import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId('table')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId('table')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});