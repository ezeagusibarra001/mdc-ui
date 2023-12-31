import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Layout from ".";
import Icon from "../Icon/Icon";

const meta = {
  title: "MDC+54/Layout",
  component: Layout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <h1>NASHE</h1>,
    header: {
      logo: "/logo.png",
      color: "blue",
      shade: "900",
      menu: [
        {
          name: "Home",
          onClick: () => console.log("Home"),
        },
        {
          name: "Sobre Mi",
          onClick: () => console.log("Sobre Mi"),
        },
        {
          name: "Capacitaciones",
          onClick: () => console.log("Capacitaciones"),
        },
        {
          name: "Eventos",
          onClick: () => console.log("Eventos"),
        },
        {
          name: "WEM",
          onClick: () => console.log("WEM"),
        },
        {
          name: "Contacto",
          onClick: () => console.log("Contacto"),
        },
        {
          name: "Admin",
          onClick: () => console.log("Contacto"),
          isButton: true,
          isOnlyDesktop: true,
        },
      ],
    },
    footer: {
      logo: "/logo.png",
      menu: [
        {
          name: "Mis cursos",
          onClick: () => console.log("Mis cursos"),
        },
        {
          name: "Eventos",
          onClick: () => console.log("Eventos"),
        },
        {
          name: "Mentorias",
          onClick: () => console.log("Mentorias"),
        },
        {
          name: "Sobre WEM",
          onClick: () => console.log("Mentorias"),
        },
      ],
      social: [
        {
          name: "telegram",
          url: "https://www.facebook.com",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com",
        },
        {
          name: "youtube",
          url: "https://www.twitter.com",
        },
        {
          name: "facebook",
          url: "https://www.instagram.com",
        },
        {
          name: "tiktok",
          url: "https://www.twitter.com",
        },
      ],
    },
  },
};
