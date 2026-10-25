import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Título de la tarjeta',
    description: 'Esta es una descripción de ejemplo.',
    backgroundColor: '#ffffff',
  },
};
export const Disabled: Story = {
  args: {
    title: 'Título de la tarjeta',
    description: 'Esta es una descripción de ejemplo.',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};