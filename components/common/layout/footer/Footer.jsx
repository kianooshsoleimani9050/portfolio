import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavBar, NavBarItem } from "../header/Navbar";
import FooterSocialLink from "./FooterSocialLink";

const Footer = () => {
  return (
    <NavBar className="footer-container p-0 m-0">
      <NavBarItem col="col-12 col-md-2 navbar-link my-2">Contact</NavBarItem>
      <NavBarItem col="col-12 col-md-10" className="row justify-content-center">
        <FooterSocialLink
          href="mailto:mazyar.solo@gmail.com"
          className="p-1 m-0 col-12 col-sm-6 col-xl-3"
        >
          <span className="mb-1 mx-2">
            <FaEnvelope />
          </span>
          <span>Email</span>
        </FooterSocialLink>
        <FooterSocialLink
          href="https://linkedin.com/in/kianoosh-soleimani-b5a925225"
          className="p-1 m-0 col-12 col-sm-6 col-xl-3"
        >
          <span className="mb-1 mx-2">
            <FaLinkedin />
          </span>
          <span>LinkedIn</span>
        </FooterSocialLink>
        <FooterSocialLink
          href="https://github.com/kianooshsoleimani9050"
          className="p-1 m-0 col-12 col-sm-6 col-xl-3"
        >
          <span className="mb-1 mx-2">
            <FaGithub />
          </span>
          <span>GitHub</span>
        </FooterSocialLink>
        <FooterSocialLink
          href="/files/kianoosh-soleimani-cv.pdf"
          download
          className="p-1 m-0 col-12 col-sm-6 col-xl-3"
        >
          <span className="mb-1 mx-2">
            <FaDownload />
          </span>
          <span>Download CV</span>
        </FooterSocialLink>
      </NavBarItem>
    </NavBar>
  );
};

export default Footer;
