import Image from "next/image";
import style from "styles/Header.module.scss";
import Navbar from "./Navbar";
import Phone from "./PhoneComp";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { useAppContext } from "context/state";

import React, { useEffect } from "react";
function Header() {
  const { scroll, setScroll } = useAppContext();
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        setScroll(true);
      }else{
        setScroll(false)
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);
  return (
    <Wrapper>
      <div
        className={scroll ? `${style.fixed_bar}` : `${style.container_center}`}
      >
        <header className={ scroll ? `${style.navscroll}`: `${style.container}`}>
          <Link href="/">
            <a className={style.logo}>
              {" "}
              <Image src="/logo.png" width={70} height={94} />{" "}
            </a>
          </Link>
          <Navbar />
          <Phone />
        </header>
      </div>
    </Wrapper>
  );
}

export default Header;
