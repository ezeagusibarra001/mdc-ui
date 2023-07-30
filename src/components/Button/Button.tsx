import React, { useMemo } from "react";
import { AVAILABLE_COLORS } from "../../constants/Colors";
import { SHADES } from "../../types/types";

type ButtonProps = {
    label: string;
    color?: keyof typeof AVAILABLE_COLORS;
    textColor?: keyof typeof AVAILABLE_COLORS;
    shade?: SHADES;
    size?: "small" | "medium" | "large";
    weight?: "extralight" | "light" | "regular" | "semibold" | "bold";
};

const Button = ({ label, color = "blue", textColor = "white", shade = "DEFAULT", size = "medium", weight = "regular" }: ButtonProps) => {
    const bgColor = useMemo(() => (shade === "DEFAULT" ? `var(--${color})` : `var(--${color}-${shade})`), [color, shade]);
    const textSize = useMemo(() => {
        switch (size) {
            case "small":
                return "11px";
            case "medium":
                return "14px";
            case "large":
                return "16px";
        }
    }, [size]);
    const textWeight = useMemo(() => {
        switch (weight) {
            case "extralight":
                return "100";
            case "light":
                return "400";
            case "regular":
                return "500";
            case "semibold":
                return "700";
            case "bold":
                return "900";
        }
    }, [weight]);
    return (
        <>
            <button>{label}</button>
            <style>{`
                button {
                    border: none;
                    border-radius: 40px;
                    font-size: ${textSize};
                    padding: 13px 20px;
                    background-color: ${bgColor};
                    color: var(--${textColor});
                    font-weight: ${textWeight};
                }
            `}</style>
        </>
    );
};

export default Button;