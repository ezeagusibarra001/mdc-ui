import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { HeaderProps } from "./Header";
import classNames from "./Layout.module.css";

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

  const useWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return width
  }
  const windowWidth = useWidth()
  const closeDrawerMinWidth = { minWidth: `${windowWidth * 0.75 > 300 && windowWidth - 320}px` }
  const colorSpan = { color: shade === "DEFAULT" ? `var(--${color})` : `var(--${color}-${shade})` }

  return (
    <>
      <div>
        <div className={classNames.iconDrawer} onClick={handleToggle}>
          <Icon name="hamburger" color={"black"} />
        </div>
        <div className={classNames.containerDrawer}>
          <div className={`${classNames.drawer} ${isOpen ? classNames.open : ""}`}>
            <div className={classNames.crossIcon} onClick={handleToggle}>
              <Icon name="cross" color={color} shade={shade} />
            </div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className={classNames.containerMenu}>
              {menu.map(({ name, onClick }) => (
                <span style={colorSpan} onClick={onClick} key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div
            onClick={handleToggle}
            style={closeDrawerMinWidth}
            className={`${classNames.closeDrawer} ${isOpen ? classNames.open : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
