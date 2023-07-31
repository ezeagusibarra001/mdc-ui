import React from "react";
import type { Preview } from "@storybook/react";
import { CssBaseline } from "../src/components";
import "../src/styles/global.css";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <CssBaseline />
        <Story />
      </div>
    ),
  ],
};

export default preview;
