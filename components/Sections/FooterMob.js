import style from "styles/FooterM.module.scss";
import Wrapper from "../Wrapper";
// import Link from "next/link";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Phone from "../PhoneComp";
import { useAppContext } from "context/state";

export default function FooterMob() {
  const { links } = useAppContext();
  return (
    <footer className={style.footer}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.social_cont}>
            <img src="/logo_f.svg" alt="" />
            <div className={style.inst}>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                href={`${process.env.INSTAGRAM}`}
                target="_blank"
              >
                <img src="/inst.svg" alt="inst" />
              </a>
            </div>
          </div>
          <div className={style.container_flex}>
            <div className={style.first_flex}>
              {links
                .map((link, index) => {
                  // const {href} =link
                  return (
                    <Link
                      key={index}
                      className={style.link}
                      smooth={true}
                      offset={-105}
                      duration={800}
                      to={link.href}
                    >
                      {link.title}
                    </Link>
                  );
                })
                .slice(0, 3)}{" "}
            </div>
            <div className={style.second_flex}>
              {links
                .map((link, index) => {
                  return (
                    <Link className={style.link} key={index} to={link.href}>
                      {link.title}
                    </Link>
                  );
                })
                .slice(3)}{" "}
            </div>
          </div>
          <div className={style.phone_center}>
            <Phone />
          </div>
          <div className={style.policy}>
            
              <a
                className={style.link}
                href="/politika_konfid.pdf"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Политика конфиденциальности
              </a>
          
            <p className={style.link_sp}>
              &copy; {new Date().getFullYear()}, «Ярвино»{" "}
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
