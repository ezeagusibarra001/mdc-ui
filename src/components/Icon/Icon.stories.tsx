import type { Meta, StoryObj } from "@storybook/react";

import Icon from ".";

const meta = {
  title: "MDC+54/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "blue",
    name: "email",
    shade: "900",
  },
};
