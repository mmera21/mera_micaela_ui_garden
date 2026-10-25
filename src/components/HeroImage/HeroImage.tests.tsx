import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

const src = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

describe('HeroImage', () => {
  test('is visible', () => {
    render(<HeroImage src={src} title="Welcome" />);
    expect(screen.getByTestId('hero-image')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<HeroImage src={src} title="Welcome" disabled />);
    expect(screen.getByTestId('hero-image')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});