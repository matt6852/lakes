import "styles/globals.scss";
import { AppWrapper } from "context/state";
import { useEffect } from "react";
import TagManager from "react-gtm-module";


function MyApp({ Component, pageProps }) {
   useEffect(() => {
     TagManager.initialize({ gtmId: "GTM-PJ68RP6" });
   }, []);
  return (
    <AppWrapper>

      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
