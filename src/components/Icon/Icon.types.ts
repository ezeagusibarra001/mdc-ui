import { Color, SHADES } from "../../types/types";

export const IconNames = [
   "hamburger"
] as const;

export type IconName = typeof IconNames[number];

export type IconProps = {
    name: IconName;
    color?: Color;
    shade?: SHADES;
};