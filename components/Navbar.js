import { useAppContext } from "context/state";
import Link from "next/link";
import style from "styles/Navbar.module.scss";

function Navbar() {
  const { links } = useAppContext();
  const renderLinks = links.map((link, index) => {
    const { title, href } = link;
    return (
      <Link key={index} href={href}>
        <a className={style.link}>{title}</a>
      </Link>
    );
  });
  return (
    <nav className={style.main_nav}>
      {renderLinks}
     
    </nav>
  );
}

export default Navbar;
