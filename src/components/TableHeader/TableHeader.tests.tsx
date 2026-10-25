import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('is visible', () => {
    render(
      <table>
        <TableHeader columns={['Name', 'Age']} />
      </table>
    );
    expect(screen.getByTestId('table-header')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <TableHeader columns={['Name', 'Age']} disabled />
      </table>
    );
    expect(screen.getByTestId('table-header')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});