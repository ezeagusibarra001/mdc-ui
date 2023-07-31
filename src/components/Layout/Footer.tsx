import React from "react";
import { IconName } from "../Icon/Icon.types";
import Icon from "../Icon/Icon";

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
      <footer>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="container-social">
          {social.map(({ name, url }) => (
            <a className="icon-social" target="_blank" href={url} key={name}>
              <Icon color="black" name={name} />
            </a>
          ))}
        </div>
        <div className="container-menu">
          {menu.map(({ name, onClick }) => (
            <span onClick={onClick} key={name}>
              {name}
            </span>
          ))}
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            -webkit-box-shadow: 0px -5px 29px 0px rgba(35, 35, 35, 0.5);
            -moz-box-shadow: 0px -5px 29px 0px rgba(35, 35, 35, 0.5);
            box-shadow: 0px -5px 29px 0px rgba(35, 35, 35, 0.5);
          }
          .icon-social {
            width: 30px;
          }
          .container-social {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 250px;
          }
          .container-menu {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .container-menu span {
            cursor: pointer;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
