import type { Meta, StoryObj } from "@storybook/react";
import CssBase from "./CssBase";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof CssBase> = {
  title: "Components/CssBase",
  component: CssBase,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof CssBase>;

export const Primary: Story = {
  args: {},
};