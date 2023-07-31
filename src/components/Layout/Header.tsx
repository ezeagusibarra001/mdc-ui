import React from "react";
import { Color, SHADES } from "../../types/types";
import MobileDrawer from "./Drawer";

export type HeaderProps = {
  logo: string;
  color?: Color;
  shade?: SHADES;
};

export default function Header({ logo, color, shade }: HeaderProps) {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <MobileDrawer />
      </header>
      <style jsx>
        {`
          header {
            display: flex;
            height: 100px;
            align-items: center;
            justify-content: space-evenly;
          }
        `}
      </style>
    </>
  );
}
