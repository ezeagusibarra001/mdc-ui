import type { Meta, StoryObj } from '@storybook/react';

import Slider from '.'

const meta = {
    title: 'MDC+54/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};