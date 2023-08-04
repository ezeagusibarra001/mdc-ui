import { Color, SHADES } from "../../types/types";

export const IconNames = [
  "hamburger",
  "telegram",
  "instagram",
  "youtube",
  "facebook",
  "tiktok",
  "cross",
  "course",
  "clip",
  "play",
  "stars",
] as const;

export type IconName = (typeof IconNames)[number];

export type IconProps = {
  name: IconName;
  color?: Color;
  shade?: SHADES;
};
