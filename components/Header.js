import Image from "next/image";
import style from "styles/Header.module.scss";
import Navbar from "./Navbar";
import Phone from "./PhoneComp";

function Header() {
  return (
    <header className={style.container}>
      {/* <Link href =""> */}
      <a>
        {" "}
        <Image src="/logo.png" width={70}
        height ={94} />{" "}
      </a>

      <Navbar />
      <Phone />
      {/* </Link> */}
    </header>
  );
}

export default Header;
