import Footer from "./footer/Footer";
import Header from "./header/Header";

const WebLayout = ({ children }) => {
  return (
    <div className="m-0 layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default WebLayout;
