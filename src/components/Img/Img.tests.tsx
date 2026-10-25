import { render, screen } from '@testing-library/react';
import Img from './Img';

const src = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

describe('Img', () => {
  test('is visible', () => {
    render(<Img src={src} alt="Example" />);
    expect(screen.getByAltText('Example')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Img src={src} alt="Disabled" disabled />);
    expect(screen.getByAltText('Disabled')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});