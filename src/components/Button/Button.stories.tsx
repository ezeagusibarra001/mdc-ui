import type { Meta, StoryObj } from '@storybook/react';

import Button from '.'

const meta = {
    title: 'MDC+54/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    disabled: false,
  },
};