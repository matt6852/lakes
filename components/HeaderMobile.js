import Link from "next/link";
import { useAppContext } from "context/state";
import style from "styles/HeaderMobile.module.scss";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeaderMobile() {
  const year = new Date().getFullYear();
  const {
    links,
    showBar,
    setShowBar,
    scrollM,
    setScrollM,
    loading,
    setLoading,
  } = useAppContext();
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
  useEffect(() => {
    // console.log(loading);
    const handleLoading = () => {
      if (loading) {
        document.querySelector(".hide").classList.add("red")
      }
      else{
        document.querySelector(".hide").classList.add("blue");
      }
      setLoading(!loading)
      
    };
    window.addEventListener("load", handleLoading);

    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);
  console.log(loading);
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
        <div
          onClick={() => setShowBar(!showBar)}
          className={
            showBar ? `${style.btn_mobile} ` : ` ${style.btn_mobile_active} `
          }
        >
          <span className={style.line_1}></span>
          <span className={style.line_2}></span>
          <span className={style.line_3}></span>
        </div>
      </div>
      <div className={showBar ? `${style.hide} hide ` : `${style.show_bar} `}>
        <div className={style.flex_container}>
          <div className={style.logo_container}>
            <img src="/logo_mobile.png" alt="logo" />
          </div>
          <div
            onClick={() => setShowBar(!showBar)}
            className={
              showBar ? `${style.btn_mobile} ` : ` ${style.btn_mobile_active} `
            }
          >
            <span className={style.line_1}></span>
            <span className={style.line_2}></span>
            <span className={style.line_3}></span>
          </div>
        </div>
        <div className={style.mobile_container}>
          {renderLinks}
          <button
            onClick={() => setShowBar(!showBar)}
            className={`btn ${style.btn_sign}`}
          >
            {" "}
            <a href="#contacts">
              Записаться на просмотр{" "}
              <span className={style.arrow}>
                <FaArrowRight className={style.fr} />
              </span>{" "}
            </a>{" "}
          </button>
          <div></div>
          <p className={style.phone}>
            <img src="/mob_icon.png" className={style.icon} /> +7 (123)
            456-78-90{" "}
          </p>
          <div className={style.policy}>
            <p>Политика конфиденциальности</p>
            <p> &copy; {year} «Ярвино»</p>
          </div>
        </div>
      </div>
    </header>
  );
}
