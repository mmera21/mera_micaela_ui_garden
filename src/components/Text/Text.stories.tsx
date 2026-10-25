import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { text: 'This is an example text.', backgroundColor: '#f5f5f5' },
};
export const Disabled: Story = {
  args: {
    text: 'This text is disabled.',
    backgroundColor: '#f5f5f5',
    disabled: true,
  },
};