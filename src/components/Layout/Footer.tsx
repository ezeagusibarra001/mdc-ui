import React from "react";
import { IconName } from "../Icon/Icon.types";
import Icon from "../Icon/Icon";
import classNames from "./Layout.module.css";

export type FooterProps = {
  logo: string;
  menu: {
    name: string;
    onClick: () => void;
  }[];
  social: {
    name: IconName;
    url: string;
  }[];
};

export default function Footer({ logo, social, menu }: FooterProps) {
  return (
    <>
      <footer className={classNames.footer}>
        <div className={classNames.containerRedesAndLogo}>
          <div >
            <img className={classNames.logoFooter} src={logo} alt="logo" />
          </div>
          <div className={classNames.containerSocial}>
            {social.map(({ name, url }) => (
              <a className={classNames.iconSocial} target="_blank" href={url} key={name}>
                <Icon color="black" name={name} />
              </a>
            ))}
          </div>
        </div>
        <div className={classNames.containerMenu}>
          {menu.map(({ name, onClick }) => (
            <span onClick={onClick} key={name}>
              {name}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
