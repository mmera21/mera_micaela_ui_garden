import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton label="Opción A" />);
    expect(screen.getByLabelText('Opción A')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<RadioButton label="Deshabilitado" disabled />);
    expect(screen.getByText('Deshabilitado')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});