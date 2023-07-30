import React from 'react'
import { IconName, IconProps } from "./Icon.types";
import { get } from "../../constants/Colors";

export default function Icon({ name, color }: IconProps) {
    const iconColor = color ? get(color) : undefined;
    const iconDict: { [T in IconName]: JSX.Element } = {
        hamburger: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path d="M1 1H23" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 8H23" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 15H23" stroke-width="2" stroke-linecap="round" />
                </svg>
                <style>{`
                    svg {
                        stroke: var(--icon-color);
                        ${iconColor && `
                        --icon-color: ${iconColor};
                        `}
                    }
                `}</style>
            </>
        )
    }
    const svg = Object.keys(iconDict).includes(name) ? iconDict[name] : null;
    return <>
        {svg}
    </>;
}
