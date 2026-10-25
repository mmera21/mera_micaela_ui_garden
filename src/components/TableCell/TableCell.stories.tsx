import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: { children: 'Cell content', backgroundColor: '#ffffff' },
};
export const Disabled: Story = {
  args: {
    children: 'Cell content',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};