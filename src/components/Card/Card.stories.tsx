import type { Meta, StoryObj } from '@storybook/react';

import Card from '.'

const meta = {
    title: 'MDC+54/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: 'https://via.placeholder.com/150',
    title: 'Networker Digital: Habilidades Disruptivas',
    price: 100,
    onClick: () => {},
    label: 'Precio lanzamiento',
  },
};