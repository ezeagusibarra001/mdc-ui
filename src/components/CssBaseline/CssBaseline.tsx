import React, { ReactElement } from 'react'
import flush from 'styled-jsx/server'

import { getCssVariables } from "../../constants/Colors";

export type FlushToReact = <T>(opts?: { nonce?: string }) => Array<ReactElement<T>>

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            {children}
            <style global jsx>
                {`
                :root {
                    ${getCssVariables()}
                }
                `}
            </style>
        </>
    )
}

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
    flush: FlushToReact
}

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
    React.PropsWithChildren<unknown>
>
MemoCssBaseline.flush = flush

export default MemoCssBaseline
