import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};