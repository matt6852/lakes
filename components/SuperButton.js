import style from "styles/SuperBtn.module.scss";
import { useAppContext } from "context/state";
import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import Link from "next/link";

export default function SuperButton() {
  const { scrollBtn, setScrollBtn } = useAppContext();
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        setScrollBtn(false);
      } else {
        setScrollBtn(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);
  return (
    <Link
      className={scrollBtn ? `${style.hidden}` : `${style.super_btn}`}
      to="#/"
      smooth={true}
      offset={-105}
      duration={800}
    >
      &uarr;
    </Link>
  );
}
