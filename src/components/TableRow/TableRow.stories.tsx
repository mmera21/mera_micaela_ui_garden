import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';
import TableCell from '../TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  decorators: [
    (Story) => (
      <table style={{ width: '100%' }}>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <TableRow {...args}>
      <TableCell disabled={args.disabled}>Ana</TableCell>
      <TableCell disabled={args.disabled}>28</TableCell>
      <TableCell disabled={args.disabled}>Winnipeg</TableCell>
    </TableRow>
  ),
};
export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = { args: { backgroundColor: '#ffffff' } };
export const Disabled: Story = {
  args: { backgroundColor: '#ffffff', disabled: true },
};