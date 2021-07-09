import { useAppContext } from "context/state";
// import Link from "next/link";
import style from "styles/Navbar.module.scss";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";


function Navbar() {
  const { links } = useAppContext();
 const  scrollTo = ()=> {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    // console.log(e.target);
  }
  const renderLinks = links.map((link, index) => {
    const { title, href } = link;
    return (
     
        <Link
          // onClick={() => scrollTo()}
          key={index}
          className={style.link}
          to={href}
          smooth ={true}
          offset ={-105}
          duration ={ 800}
        >
          {title}{" "}
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
