import React from "react";
import "./Button.css";
import { AVAILABLE_COLORS } from "../../constants/Colors";

type ButtonProps = {
    label: string;
    color?: keyof typeof AVAILABLE_COLORS;
};

const Button = ({label, color} : ButtonProps) => {
    return (
        <>
            <button>{label}</button>
            <style>{`
                button {
                    background-color: var(--${color}-500);
                }
            `}</style>
        </>
    );
};

export default Button;