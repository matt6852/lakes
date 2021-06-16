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
            <div className ={style.sociol_cont}>
              <div className ={style.inst}>
                <img src="/inst.svg" alt="" />
              </div>
              <div className ={style.pnone}>
                <img src="/phoneFoot.svg" alt="" />
              </div>
              <p className={style.text_p}>+7 (123) 456-78-90</p>
            </div>
          </div>
        </Wrapper>
      </footer>
      <FooterM className={style.mb} />
    </>
  );
}
