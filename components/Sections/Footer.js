import style from "styles/Footer.module.scss";
import { useAppContext } from "context/state";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

import Wrapper from "../Wrapper";

export default function Footer() {
  const { links } = useAppContext();
  return (
    <footer className={style.footer}>
      <Wrapper>
        <div className={style.container}>
          <img src="/footer.png" alt="" />
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.href}>
                <a className={style.link}>{link.title}</a>
              </Link>
            );
          })}{" "}
          <p className  ={ style.phone}>
            <FaPhoneAlt className={style.icon} /> +7 (123) 456-78-90
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
