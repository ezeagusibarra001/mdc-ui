import React from "react";
import { Color, SHADES } from "../../types/types";
import MobileDrawer from "./Drawer";
import classNames from "./Layout.module.css";

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
      <header className={classNames.header}>
        <div>
          <img src={header.logo} alt="logo" />
        </div>
        <MobileDrawer {...header} />
      </header>
    </>
  );
}
