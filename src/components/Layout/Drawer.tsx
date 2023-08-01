import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { HeaderProps } from "./Header";

type MobileDraweProps = HeaderProps

const MobileDrawer = ({
  color = "black",
  shade = "DEFAULT",
  logo,
  menu
}: MobileDraweProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {/* Button to toggle the drawer */}
        <div className="icon-drawer" onClick={handleToggle}>
          <Icon name="hamburger" color={color} shade={shade} />
        </div>
        {/* Drawer */}
        <div className="container-drawer">
          <div className={`drawer ${isOpen ? "open" : ""}`}>
            <div className="cross-icon" onClick={handleToggle}>
              <Icon name="telegram" color="black" />
            </div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="container-menu">
              {menu.map(({ name, onClick }) => (
                <span onClick={onClick} key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div
            onClick={handleToggle}
            className={`close-drawer ${isOpen ? "open" : ""}`}
          ></div>
        </div>
      </div>
      <style jsx>{`
        .container-drawer {
          display: flex;
          width: 100%;
        }
        .drawer {
          position: fixed;
          top: 0;
          left: -100%;
          width: 75%;
          height: 100%;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          transition: left 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top:2.5rem;
          align-items: center;
        }
        .close-drawer {
          position: absolute;
          right: 0;
          top: 0;
          width: 25%;
          height: 100%;
          pointer-events: none;
        }

        .close-drawer.open {
          pointer-events: auto;
        }

        .drawer.open {
          left: 0;
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

        button {
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .icon-drawer {
          width: 30px;
        }
        .cross-icon{
          width: 30px;
          position: absolute;
          right: 0.5rem;
          top:0.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MobileDrawer;
