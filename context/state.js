import { createContext, useContext, useState } from "react";
import { links, textC, uniqCards, howToBuyCards, textM } from "data";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scroll, setScroll] = useState(false);
  const [index, setIndex] = useState(0);
  const [scrollBtn, setScrollBtn] = useState(false);
  const sharedState = {
    links,
    uniqCards,
    scroll,
    setScroll,

    textC,
    howToBuyCards,
    scrollBtn,
    setScrollBtn,
    setIndex,
    index,
    textM,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
