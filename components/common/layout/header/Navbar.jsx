import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ children, className = "" }) => {
  return (
    <nav
      className={`${className} p-0 m-0 navbar-container d-flex row align-items-center justify-content-between`}
    >
      {children}
    </nav>
  );
};
const NavBarItem = ({ children, className, col }) => {
  return (
    <div className={col}>
      <div className={`${className} p-0 m-0 d-flex align-items-center`}>
        {children}
      </div>
    </div>
  );
};
const ActiveNavLink = ({
  children,
  href = "/",
  defaultClassName = "",
  className = "",
  activeClassName = "",
}) => {
  const router = useRouter();
  const active = router.pathname === href ? true : false;
  return (
    <Link href={href}>
      <a
        className={`${defaultClassName} ${
          active ? activeClassName : className
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
const NavLink = ({ children, href = "/", className = "" }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export { NavBar, NavBarItem, ActiveNavLink, NavLink };
