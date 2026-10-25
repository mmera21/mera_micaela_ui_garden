import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const sampleSrc =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200">' +
      '<rect width="320" height="200" fill="#4f8ef7"/>' +
      '<circle cx="160" cy="100" r="50" fill="#ffffff" opacity="0.8"/>' +
      '</svg>'
  );

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: { src: sampleSrc, alt: 'Imagen de ejemplo', backgroundColor: '#e6f0ff' },
};
export const Disabled: Story = {
  args: {
    src: sampleSrc,
    alt: 'Imagen deshabilitada',
    backgroundColor: '#e6f0ff',
    disabled: true,
  },
};