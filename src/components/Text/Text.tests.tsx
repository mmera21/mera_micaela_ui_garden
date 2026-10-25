import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('is visible', () => {
    render(<Text text="Hello world" />);
    expect(screen.getByText('Hello world')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Text text="Disabled" disabled />);
    expect(screen.getByText('Disabled')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});