import React from "react";
import "./Button.css";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "secondary";
    /**
     * What background color to use
     */
    textColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
    type = "primary",
    textColor,
    size = "medium",
    onClick,
    label,
}: ButtonProps) => {
    return (
        <button
            type="button"
            style={textColor ? { color: textColor } : {}}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;