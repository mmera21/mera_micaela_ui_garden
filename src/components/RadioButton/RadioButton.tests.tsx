import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton label="Option A" />);
    expect(screen.getByLabelText('Option A')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<RadioButton label="Disabled" disabled />);
    expect(screen.getByText('Disabled')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});