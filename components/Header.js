import Image from "next/image";
import style from "styles/Header.module.scss";
import Navbar from "./Navbar";
import Phone from "./PhoneComp";
import Link from "next/link";
import { useAppContext } from "context/state";
import Wrapper from "./Wrapper";
import React, { useEffect } from "react";


function Header() {
  const { scroll, setScroll } = useAppContext();
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);
  return (
   
      <div className={scroll ? `${style.fixed_bar}` : `${style.center}`}>
        <Wrapper>
          <header
            className={scroll ? `${style.navscroll}` : `${style.container}`}
          >
            <Link href="/">
              <a className={style.logo}>
                {" "}
                <Image src="/logo.svg" width={70} height={94} />{" "}
              </a>
            </Link>
            <Navbar />
            <Phone />
          </header>
        </Wrapper>
      </div>
    
  );
}

export default Header;
