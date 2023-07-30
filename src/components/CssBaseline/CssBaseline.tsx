import React from 'react'

import { getCssVariables } from "../../constants/Colors";

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            {children}
            <style>
                {`
                :root {
                    ${getCssVariables()}
                }
                `}
            </style>
        </>
    )
}

export default CssBaseline
