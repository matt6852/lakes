import style from "styles/FooterM.module.scss";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Phone from "../PhoneComp";
import { useAppContext } from "context/state";

export default function FooterMob() {
  const { links } = useAppContext();
  return (
    <footer className={style.footer}>
      <Wrapper>
        <div className={style.container}>
          <div className ={style.social_cont}>
            <img src="/logo_f.svg" alt="" />
            <div className={style.inst}>
              <img src="/inst.svg" alt="" />
            </div>
          </div>
          <div className={style.container_flex}>
            <div className={style.first_flex}>
              {links
                .map((link, index) => {
                  return (
                    <Link key={index} href={link.href}>
                      <a className={style.link}>{link.title}</a>
                    </Link>
                  );
                })
                .slice(0, 3)}{" "}
            </div>
            <div className={style.second_flex}>
              {links
                .map((link, index) => {
                  return (
                    <Link key={index} href={link.href}>
                      <a className={style.link}>{link.title}</a>
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
            <Link href="/">
              <a className={style.link}>Политика конфиденциальности</a>
            </Link>
            <p className={style.link_sp}>
              &copy; {new Date().getFullYear()}, «Ярвино»{" "}
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
