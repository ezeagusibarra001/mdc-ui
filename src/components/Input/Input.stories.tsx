import type { Meta, StoryObj } from '@storybook/react';

import Input from '.'

const meta = {
    title: 'MDC+54/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: {
            text: "Label",
            color: "black",
        },
        onChange: (value) => { console.log(value) },
        placeholder: "Placeholder",
        bgColor: "gray",
        textColor: "white",
    },
};