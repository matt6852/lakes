import Navbar from "components/Navbar";
import Header from "components/Header";
import MainSection from "components/Sections/MainSection";
import UniqAries from "components/Sections/UniqAries";
import Projects from "components/Sections/Projects";
import History from "components/Sections/History";
import Carousel from "components/Carousel";
import HowToBuy from "components/Sections/HowToBuy";
import Contacts from "components/Sections/Contacts";
import Footer from "components/Sections/Footer";

import { useAppContext } from "context/state";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection/>
      <UniqAries/>
      <Projects/>
      <History/>
      <Carousel/>
      <HowToBuy/>
      <Contacts/>
      <Footer/>

    </>
  );
}
