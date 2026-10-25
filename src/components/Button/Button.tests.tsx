import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('is visible', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Button label="Disabled" disabled />);
    expect(screen.getByText('Disabled')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});