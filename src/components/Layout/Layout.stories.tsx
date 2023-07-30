import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Layout> = {
    title: "Components/Layout",
    component: Layout,
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
    args: {
        children: <h1>Hello World</h1>,
    },
};