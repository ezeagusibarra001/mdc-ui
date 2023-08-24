import React from 'react';
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
        items: [
            <div>1</div>,
            <div>2</div>,
            <div>3</div>,
            <div>4</div>,
            <div>5</div>,
        ],
    },
};