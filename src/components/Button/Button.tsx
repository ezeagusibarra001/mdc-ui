import React, { useMemo } from "react";
import { AVAILABLE_COLORS } from "../../constants/Colors";
import { SHADES } from "../../types/types";
import classNames from "./Button.module.css";

type ButtonProps = {
    onClick: () => void;
    label: string;
    color?: keyof typeof AVAILABLE_COLORS;
    textColor?: keyof typeof AVAILABLE_COLORS;
    shade?: SHADES;
    size?: "small" | "medium" | "large";
    weight?: "extralight" | "light" | "regular" | "semibold" | "bold";
};

export default function Button({ onClick, label, color = "blue", textColor = "white", shade = "DEFAULT", size = "medium", weight = "regular" }: ButtonProps) {
    const bgColor = shade === "DEFAULT" ? `var(--${color})` : `var(--${color}-${shade})`
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
    const styles = { fontSize: textSize, backgroundColor: bgColor, fontWeight: textWeight, color: `var(--${textColor})` }
    return (
        <>
            <button onClick={onClick} className={classNames.button} style={styles} >{label}</button>
        </>
    );
};