
import style from "styles/Header.module.scss";
import Navbar from "./Navbar"
import Phone from "./PhoneComp"


function Header() {
  return (
    <header className = {style.container}>
      {/* <Link href =""> */}
        <a> logo </a>
       
        <Navbar/>
       <Phone/>
      {/* </Link> */}
    </header>
  );
}

export default Header;
