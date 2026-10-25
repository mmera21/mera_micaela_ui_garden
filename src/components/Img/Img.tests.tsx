import { render, screen } from '@testing-library/react';
import Img from './Img';

const src = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

describe('Img', () => {
  test('is visible', () => {
    render(<Img src={src} alt="Ejemplo" />);
    expect(screen.getByAltText('Ejemplo')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Img src={src} alt="Deshabilitada" disabled />);
    expect(screen.getByAltText('Deshabilitada')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});