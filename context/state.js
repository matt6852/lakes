import { createContext, useContext } from "react";
import {links} from "data"
import {uniqCards} from "data"

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    links,
    uniqCards
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
