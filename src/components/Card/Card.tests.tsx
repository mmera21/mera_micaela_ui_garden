import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('is visible', () => {
    render(<Card title="Hello" description="Description" />);
    expect(screen.getByTestId('card')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Card title="Hello" description="Description" disabled />);
    expect(screen.getByTestId('card')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});