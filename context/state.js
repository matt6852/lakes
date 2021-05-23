import { createContext, useContext, useState } from "react";
import { links, textC, uniqCards, howToBuyCards } from "data";


const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scroll, setScroll] = useState(false);
  const [textCarousel, setTextCarousel] = useState(textC[0]);
  const sharedState = {
    links,
    uniqCards,
    scroll,
    setScroll,
    textCarousel,
    setTextCarousel,
    textC,
    howToBuyCards,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
