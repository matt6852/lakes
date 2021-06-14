import style from "styles/SuperBtn.module.scss";
import { useAppContext } from "context/state";
import React, { useEffect } from "react";
import Link from "next/link";

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
    <Link href="/">
      <a className={scrollBtn ? `${style.hidden}` : `${style.super_btn}`}>
        {" "}
        &uarr;
      </a>
    </Link>
  );
}
