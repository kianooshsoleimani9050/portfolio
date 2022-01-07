import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { ActiveNavLink, NavBar, NavBarItem } from "./Navbar";
const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="p-0 m-0">
      <FaAlignJustify
        size={30}
        className="mobile-menu-icon"
        onClick={handleToggleMenu}
      />
      <div
        className={`p-0 m-0 mobile-menu-container ${
          showMenu ? "mobile-menu-show" : "mobile-menu-hide"
        }`}
      >
        <NavBar className="h-100">
          <NavBarItem col="col-12" className="justify-content-center">
            <ActiveNavLink defaultClassName="mobile-menu-navbar-link">
              Home
            </ActiveNavLink>
          </NavBarItem>
          <NavBarItem col="col-12" className="justify-content-center">
            <ActiveNavLink defaultClassName="mobile-menu-navbar-link">
              Projects
            </ActiveNavLink>
          </NavBarItem>
          <NavBarItem col="col-12" className="justify-content-center">
            <ActiveNavLink defaultClassName="mobile-menu-navbar-link">
              Resume
            </ActiveNavLink>
          </NavBarItem>
          <NavBarItem col="col-12" className="justify-content-center">
            <ActiveNavLink defaultClassName="mobile-menu-navbar-link">
              Contact
            </ActiveNavLink>
          </NavBarItem>
        </NavBar>
      </div>
    </div>
  );
};

export default MobileHeader;
