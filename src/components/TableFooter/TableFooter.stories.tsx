import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  decorators: [
    (Story) => (
      <table style={{ width: '100%' }}>
        <Story />
      </table>
    ),
  ],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: { text: 'Total: 2 people', backgroundColor: '#e6f0ff' },
};
export const Disabled: Story = {
  args: {
    text: 'Total: 2 people',
    backgroundColor: '#e6f0ff',
    disabled: true,
  },
};