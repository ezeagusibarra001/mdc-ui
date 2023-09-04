import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.'

const meta = {
    title: 'MDC+54/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <div>'Modal'</div>,
        isOpen: true,
        onClose: () => { },
        bgColor: "blue"
    },
};

export const Image: Story = {
    args: {
        children: <div>
            <h1>Modal</h1>
            <p>Modal with image</p>
            'Modal'
            'Modal'
            'Modal'
        </div>,
        isOpen: true,
        onClose: () => { },
        bgImage: "/bg.png"
    },
};