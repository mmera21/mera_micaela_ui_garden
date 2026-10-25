import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('is visible', () => {
    render(<Label text="Nombre" />);
    expect(screen.getByText('Nombre')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Label text="Deshabilitado" disabled />);
    expect(screen.getByText('Deshabilitado')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});