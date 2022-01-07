import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../assets/sass/main.scss";
import "swiper/css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import WebLayout from "../components/common/layout/WebLayout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel="shortcut icon" href={""} />
      </Head> */}
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </>
  );
}

export default MyApp;
