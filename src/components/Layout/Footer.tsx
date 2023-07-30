import React from 'react'

export type FooterProps = {
    logo: string
}

export default function Footer({ logo }: FooterProps) {
    return (
        <>
            <footer>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </footer>
            <style jsx>
                {`
                    footer{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                `}
            </style>
        </>
    )
}
