import React, { useMemo } from 'react'
import { IconName, IconProps } from "./Icon.types";
import { get } from "../../constants/Colors";

export default function Icon({ name, color, shade = "DEFAULT" }: IconProps) {
    const iconColor = color ? get(color, shade) : undefined;
    const iconDict: { [T in IconName]: JSX.Element } = {
        hamburger: (
            <svg style={{stroke: iconColor}} xmlns="http://www.w3.org/2000/svg" width="100%"
                height="100%" viewBox="0 0 24 16" fill="none">
                <path d="M1 1H23" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 8H23" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 15H23" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    }
    const svg = Object.keys(iconDict).includes(name) ? iconDict[name] : null;
    return <>
        {svg}
    </>;
}
