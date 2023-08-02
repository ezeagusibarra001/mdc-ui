import React from 'react'
import classNames from "./Input.module.css";
import { Color, SHADES } from '../../types/types';

type InputProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "number" | "password";
    placeholder?: string;
    bgColor?: Color;
    shade?: SHADES;
    textColor?: Color;
};

export default function Input({ label, value, onChange, type = "text", placeholder = "", bgColor = "white", shade = "DEFAULT", textColor = "black" }: InputProps) {
    const inputStyles = {
        backgroundColor: shade === "DEFAULT" ? `var(--${bgColor})` : `var(--${bgColor}-${shade})`
    };
    return (
        <div className={classNames.container}>
            {label && <label>{label}</label>}
            <input style={inputStyles} type={type} placeholder={placeholder} />
        </div>
    )
}
