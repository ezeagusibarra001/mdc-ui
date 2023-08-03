import React from "react";
import { Color, SHADES } from "../../types/types";
import MobileDrawer from "./Drawer";
import classNames from "./Layout.module.css";
import Button from "../Button/Button";

export type HeaderProps = {
  logo: string;
  color?: Color;
  shade?: SHADES;
  menu: {
    name: string;
    onClick: () => void;
    isButton?: boolean;
    isOnlyDesktop?: boolean;
  }[];
};

export default function Header(header: HeaderProps) {
  const menuItemStyle = {
    color: header.shade === "DEFAULT" ? `var(--${header.color})` : `var(--${header.color}-${header.shade})`,
  } as React.CSSProperties;
  return (
    <>
      <header className={classNames.header}>
        <div>
          <img src={header.logo} alt="logo" />
        </div>
        <nav className={classNames.menuDesktop}>
          {header.menu.map((item) => (
            item.isButton ? (
              <Button label={item.name} key={item.name} onClick={item.onClick} color={header.color} shade={header.shade} />
            ) : (
              <span style={menuItemStyle} key={item.name} onClick={item.onClick}>
                {item.name}
              </span>
            )
          ))}
        </nav>
        <MobileDrawer {...header} />
      </header>
    </>
  );
}
