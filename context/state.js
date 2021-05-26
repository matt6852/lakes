import { createContext, useContext, useState } from "react";
import {
  links,
  textC,
  uniqCards,
  howToBuyCards,
  carouselimgMob,
} from "data";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scroll, setScroll] = useState(false);
  const [scrollM, setScrollM] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [index, setIndex] = useState(0);
  const [scrollBtn, setScrollBtn] = useState(false);
  const sharedState = {
    links,
    uniqCards,
    scroll,
    setScroll,
carouselimgMob,
    textC,
    howToBuyCards,
    scrollBtn,
    setScrollBtn,
    setIndex,
    index,
    showBar,
    setShowBar,
    scrollM,
    setScrollM
   
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
