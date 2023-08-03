import React from 'react'
import classNames from "./Input.module.css";
import { Color, SHADES } from '../../types/types';

type InputProps = {
    label?: {
        text: string;
        color?: Color;
    };
    value?: string;
    onChange: (value: string) => void;
    type?: "text" | "number" | "password";
    placeholder?: string;
    bgColor?: Color;
    shade?: SHADES;
    textColor?: Color;
};

export default function Input({ label, value, onChange, type = "text", placeholder = "", bgColor = "white", shade = "DEFAULT", textColor = "black" }: InputProps) {
    const inputStyles = {
        backgroundColor: shade === "DEFAULT" ? `var(--${bgColor})` : `var(--${bgColor}-${shade})`,
        color: `var(--${textColor})`,
    };
    const placesHolderClass = textColor === "white" ? classNames.white : classNames.black;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }
    return (
        <div className={classNames.container}>
            {label && <label style={{ color: `var(--${label.color})` }} >{label.text}</label>}
            <input value={value} onChange={handleChange} className={placesHolderClass} style={inputStyles} type={type} placeholder={placeholder} />
        </div>
    )
}
