import React from 'react'
import Icon from '../Icon/Icon'
import { Color, SHADES } from '../../types/types'

export type HeaderProps = {
  logo: string
  color?: Color
  shade?: SHADES
}

export default function Header({ logo, color, shade }: HeaderProps) {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='icon'>
          <Icon name="hamburger" color={color} shade={shade} />
        </div>
      </header>
      <style>
        {`
          header{
            display: flex;
            height: 100px;
            align-items: center;
            justify-content: space-evenly;
          }
          .icon{
            width: 30px;
          }
        `}
      </style>
    </>
  )
}
