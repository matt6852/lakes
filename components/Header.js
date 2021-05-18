import Image from "next/image";
import style from "styles/Header.module.scss";
import Navbar from "./Navbar";
import Phone from "./PhoneComp";
import Link from "next/link";

function Header() {
  return (
    <header className={style.container}>
      <Link href="/">
        <a>
          {" "}
          <Image src="/logo.png" width={70} height={94} />{" "}
        </a>
      </Link>
      <Navbar />
      <Phone />
    </header>
  );
}

export default Header;
