import Image from "next/image";
import style from "styles/Header.module.scss";
import Navbar from "./Navbar";
import Phone from "./PhoneComp";
import Link from "next/link";
import Wrapper from "./Wrapper";

function Header() {
  return (
    <Wrapper>
      <div className = {style.container_center}>
        <header className={style.container}>
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
