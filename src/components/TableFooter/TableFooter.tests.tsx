import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

describe('TableFooter', () => {
  test('is visible', () => {
    render(
      <table>
        <TableFooter text="Total" />
      </table>
    );
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <TableFooter text="Total" disabled />
      </table>
    );
    expect(screen.getByTestId('table-footer')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});