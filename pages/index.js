import Header from "components/Header";
import HeaderMob from "components/HeaderMobile";
import MainSection from "components/Sections/MainSection";
import UniqAries from "components/Sections/UniqAries";
import Projects from "components/Sections/Projects";
import History from "components/Sections/History";
import Carousel from "components/Carousel";

import HowToBuy from "components/Sections/HowToBuy";
import GenPlan from "components/Sections/GenPlan";
import Contacts from "components/Sections/Contacts";
import Footer from "components/Sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderMob />

      <MainSection />
      <UniqAries />
      <Projects />
      <GenPlan />
      <History />
      <Carousel />

      <HowToBuy />
      <Contacts />

      <Footer />
    </>
  );
}
