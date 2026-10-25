import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader
        columns={['Name', 'Age', 'City']}
        disabled={args.disabled}
      />
      <tbody>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Ana</TableCell>
          <TableCell disabled={args.disabled}>28</TableCell>
          <TableCell disabled={args.disabled}>Winnipeg</TableCell>
        </TableRow>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Luis</TableCell>
          <TableCell disabled={args.disabled}>34</TableCell>
          <TableCell disabled={args.disabled}>Toronto</TableCell>
        </TableRow>
      </tbody>
      <TableFooter text="Total: 2 people" colSpan={3} disabled={args.disabled} />
    </Table>
  ),
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = { args: { backgroundColor: '#ffffff' } };
export const Disabled: Story = {
  args: { backgroundColor: '#ffffff', disabled: true },
};