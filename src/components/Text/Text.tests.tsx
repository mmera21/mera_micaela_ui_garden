import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('is visible', () => {
    render(<Text text="Hola mundo" />);
    expect(screen.getByText('Hola mundo')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Text text="Deshabilitado" disabled />);
    expect(screen.getByText('Deshabilitado')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});