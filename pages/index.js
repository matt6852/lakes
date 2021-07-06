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
import Head from "next/head";

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
        <meta
          name="keywords"
          content=""
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJ68RP6');`,
          }}
        ></script>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJ68RP6"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
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
