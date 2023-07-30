import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Layout from '.'
import Icon from '../Icon/Icon';

const meta = {
    title: 'MDC+54/Layout',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <h1><Icon name='hamburger' color='blue' /></h1>,
        header: {
            logo: "/logo.png",
            color: "red",
            shade: "900",
        },
        footer:{
            logo: "/logo.png",
        }
    },
};