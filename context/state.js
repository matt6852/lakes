import { createContext, useContext, useState } from "react";
import { links } from "data";
import { uniqCards } from "data";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [scroll, setScroll] = useState(false);
  let sharedState = {
    links,
    uniqCards,
    scroll,
    setScroll,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
