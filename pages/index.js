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
import Head from 'next/head'
// sss.1993@internet.ru
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Участки под строительство дома в коттеджном поселке — Ярвино
        </title>
        <meta
          name="description"
          content="Земельные участки в Озерках Выборгский район в коттеджном поселке Ярвино, 80 км от Санкт-Петербурга. Купить участок в коттеджном поселке под ИЖС на сайте и по ☎️"
        ></meta>
          <meta name="keywords" content="HTML, CSS, JavaScript,React,NextJS"></meta>
      </Head>
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
