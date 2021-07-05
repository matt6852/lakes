import style from "styles/Footer.module.scss";
import { useAppContext } from "context/state";
import Link from "next/link";

import Wrapper from "../Wrapper";

import FooterM from "./FooterMob";

export default function Footer() {
  const { links } = useAppContext();
  return (
    <>
      <footer className={style.footer}>
        <Wrapper>
          <div className={style.container}>
            <img src="/logo_f.svg" alt="" />
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.href}>
                  <a className={style.link}>{link.title}</a>
                </Link>
              );
            })}{" "}
            <div className={style.sociol_cont}>
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
                  <img src="/inst.svg" alt="" />
                </a>
              </div>
              {/* <div className={style.pnone}>
                <img src="/phoneFoot.svg" alt="" />
              </div> */}
              <a className={style.text_p} href={`tel:${process.env.PHONE}`}>
                {process.env.PHONE_MASK}
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
      <FooterM className={style.mb} />
    </>
  );
}
