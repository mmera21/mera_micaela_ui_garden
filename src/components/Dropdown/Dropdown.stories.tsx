import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const options = [
  { value: 'one', label: 'Option 1' },
  { value: 'two', label: 'Option 2' },
  { value: 'three', label: 'Option 3' },
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
  args: { options, label: 'Select', backgroundColor: '#ffffff' },
};
export const Disabled: Story = {
  args: { options, label: 'Select', backgroundColor: '#ffffff', disabled: true },
};