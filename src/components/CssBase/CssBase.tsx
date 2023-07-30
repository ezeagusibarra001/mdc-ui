import React, { ReactElement } from 'react'

import { getCssVariables } from "../../constants/Colors";


const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            {children}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                html, body {
                    font-family: 'Poppins', sans-serif;
                }
                :root {
                    ${getCssVariables()}
                }
                `}
            </style>
        </>
    )
}

export default CssBaseline