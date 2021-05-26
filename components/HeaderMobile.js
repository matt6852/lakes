import Link from "next/link";
import { useAppContext } from "context/state";
import style from "styles/HeaderMobile.module.scss";
import Phone from "./PhoneComp";
import React, { useEffect } from "react";

export default function HeaderMobile() {
  const { links, showBar, setShowBar, scrollM, setScrollM  } = useAppContext();
  const renderLinks = links.map((link, index) => {
    const { title, href } = link;
    return (
      <Link key={index} href={href}>
        <a onClick={() => setShowBar(true)} className={style.link}>
          {title}
        </a>
      </Link>
    );
  });
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setScrollM(true);
      } else {
        setScrollM(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);
  return (
    <header
      className={
        scrollM
          ? `${style.header_mob_main}  ${style.fixed_scroll} `
          : `${style.header_mob_main}`
      }
    >
      <div className={style.flex_container}>
        <div className={style.logo_container}>
          <img src="/logo_mobile.png" alt="logo" />
        </div>
        <div onClick={() => setShowBar(!showBar)} className={style.btn_mobile}>
          <span className={style.line_1}></span>
          <span className={style.line_2}></span>
          <span className={style.line_3}></span>
        </div>
      </div>
      <div
        className={
          showBar
            ? `${style.container_links}`
            : `${style.container_links} ${style.show_bar} `
        }
      >
        {renderLinks}
        <Phone />
      </div>
    </header>
  );
}
