import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { Color, SHADES } from "../../types/types";

type MobileDraweProps = {
  color?: Color;
  shade?: SHADES;
};

const MobileDrawer: React.FC = ({
  color = "black",
  shade = "DEFAULT",
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
            <h2>Drawer Content</h2>
            <p>This is the content of the drawer.</p>
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

        /* Additional styling for the button */
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
      `}</style>
    </>
  );
};

export default MobileDrawer;
