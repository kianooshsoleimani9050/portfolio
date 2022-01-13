import Image from "next/image";
import MobileHeader from "./MobileHeader";
import { ActiveNavLink, NavBar, NavBarItem, NavLink } from "./Navbar";

const Header = () => {
  return (
    <NavBar>
      <NavBarItem col="col-10 col-md-6 p-0 m-0">
        <NavLink className="p-0 m-0 navbar-link d-flex align-items-center">
          <Image
            src="/icons/kianoosh.png"
            alt="kianoosh"
            width={40}
            height={40}
          />
          <span className="mx-2">KIANOOSH SOLEIMANI</span>
        </NavLink>
      </NavBarItem>
      <NavBarItem
        col="d-none d-md-block col-6"
        className="justify-content-center"
      >
        <ActiveNavLink defaultClassName="navbar-link mx-4">Home</ActiveNavLink>
        <ActiveNavLink defaultClassName="navbar-link mx-4">
          Projects
        </ActiveNavLink>
        <ActiveNavLink defaultClassName="navbar-link mx-4">
          Resume
        </ActiveNavLink>
        <ActiveNavLink defaultClassName="navbar-link mx-4">
          Contact
        </ActiveNavLink>
      </NavBarItem>
      <NavBarItem col="d-block d-md-none col-2" className="justify-content-end">
        <MobileHeader />
      </NavBarItem>
    </NavBar>
  );
};

export default Header;
