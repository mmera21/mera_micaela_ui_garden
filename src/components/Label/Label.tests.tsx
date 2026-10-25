import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('is visible', () => {
    render(<Label text="Name" />);
    expect(screen.getByText('Name')).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Label text="Disabled" disabled />);
    expect(screen.getByText('Disabled')).toHaveStyleRule(
      'background-color',
      '#cccccc'
    );
  });
});