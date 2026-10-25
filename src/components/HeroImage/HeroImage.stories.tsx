import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const sampleSrc =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#4f8ef7"/><stop offset="1" stop-color="#7b3fe4"/>' +
      '</linearGradient></defs>' +
      '<rect width="1200" height="400" fill="url(#g)"/>' +
      '</svg>'
  );

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: sampleSrc,
    title: 'Welcome',
    subtitle: 'My component library',
    backgroundColor: '#4f8ef7',
  },
};
export const Disabled: Story = {
  args: {
    src: sampleSrc,
    title: 'Welcome',
    subtitle: 'My component library',
    backgroundColor: '#4f8ef7',
    disabled: true,
  },
};