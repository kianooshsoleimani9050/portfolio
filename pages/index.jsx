import { useEffect } from "react";
import AOS from "aos";
import Experience from "../components/web/pages/home/Experience";
import HomeIntroduction from "../components/web/pages/home/HomeIntroduction";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomeIntroduction />
      <Experience />
    </>
  );
}
