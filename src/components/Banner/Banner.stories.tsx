import type { Meta, StoryObj } from '@storybook/react';

import Banner from '.'

const meta = {
    title: 'MDC+54/Banner',
    component: Banner,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: ""
  },
};

export const Secondary: Story = {
  args: {
    img: ""
  },
};