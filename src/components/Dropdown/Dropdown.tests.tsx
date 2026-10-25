import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'one', label: 'Opción 1' },
  { value: 'two', label: 'Opción 2' },
];

describe('Dropdown', () => {
  test('is visible', () => {
    render(<Dropdown options={options} label="Menu" />);
    expect(screen.getByLabelText('Menu')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={options} label="Menu" disabled />);
    expect(screen.getByLabelText('Menu')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});