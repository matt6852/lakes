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
  const DEFAULT_DATA = {
    name: "",
    phone: "",
    email: "",
    message: "",
    checkbox: "",
    checkbox: "",
    checkValue: false,
  };

  const [scroll, setScroll] = useState(false);
  const [formSub, setFormSub] = useState(false);
  const [scrollM, setScrollM] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [sizeWindow, setSizeWinow] = useState(0);
  const [scrollBtn, setScrollBtn] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const sharedState = {
    formSub,
    setSizeWinow,
  sizeWindow,
    setFormSub,
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
    setScrollM,
    formData,
    setFormData,
    DEFAULT_DATA,
    setShowModal,
    showModal,
   
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
