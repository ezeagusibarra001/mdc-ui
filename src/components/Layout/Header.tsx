import React from "react";
import { Color, SHADES } from "../../types/types";
import MobileDrawer from "./Drawer";

export type HeaderProps = {
  logo: string;
  color?: Color;
  shade?: SHADES;
  menu: {
    name: string;
    onClick: () => void;
  }[];
};

export default function Header(header: HeaderProps) {
  return (
    <>
      <header>
        <div>
          <img src={header.logo} alt="logo" />
        </div>
        <MobileDrawer {...header} />
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
