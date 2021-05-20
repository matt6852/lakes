import Navbar from "components/Navbar";
import Header from "components/Header";
import MainSection from "components/Sections/MainSection";
import UniqAries from "components/Sections/UniqAries";
import Projects from "components/Sections/Projects";

import { useAppContext } from "context/state";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection/>
      <UniqAries/>
      <Projects/>

    </>
  );
}
