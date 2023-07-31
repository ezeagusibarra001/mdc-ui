import { AVAILABLE_COLORS } from "../constants/Colors";

export type SHADES = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "DEFAULT";

export type Color = keyof typeof AVAILABLE_COLORS;
