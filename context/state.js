import { createContext, useContext, useState } from "react";
import {
  links,
  textC,
  uniqCards,
  howToBuyCards,
  carouselimgMob,
  mainSectionContainer,
  lands,
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
  const [data, setData] = useState(lands);
  const [singlLand, setSinglLand] = useState({});
  const [hidePlan, setHidePlan] = useState(false);
  const [hidePlan1, setHidePlan1] = useState(false);
  const [hidePlan2, setHidePlan2] = useState(false);
  const [formSub, setFormSub] = useState(false);
  const [scrollM, setScrollM] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [indexMain, setIndexMain] = useState(0);
  const [sizeWindow, setSizeWinow] = useState(0);
  // const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [scrollBtn, setScrollBtn] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const sharedState = {
    formSub,
  hidePlan, setHidePlan,
  hidePlan1, setHidePlan1,
  hidePlan2, setHidePlan2,
    end,
    setEnd,
    singlLand,
    setSinglLand,
    data,
    setData,
    indexMain,
    setIndexMain,
    mainSectionContainer,
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
