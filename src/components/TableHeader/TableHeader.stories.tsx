import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  decorators: [
    (Story) => (
      <table style={{ width: '100%' }}>
        <Story />
      </table>
    ),
  ],
  argTypes: {
    columns: { control: 'object' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: { columns: ['Name', 'Age', 'City'], backgroundColor: '#0066cc' },
};
export const Disabled: Story = {
  args: {
    columns: ['Name', 'Age', 'City'],
    backgroundColor: '#0066cc',
    disabled: true,
  },
};