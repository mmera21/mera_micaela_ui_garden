import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'one', label: 'Opción 1' },
  { value: 'two', label: 'Opción 2' },
  { value: 'three', label: 'Opción 3' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: { options, label: 'Selecciona', backgroundColor: '#ffffff' },
};
export const Disabled: Story = {
  args: { options, label: 'Selecciona', backgroundColor: '#ffffff', disabled: true },
};