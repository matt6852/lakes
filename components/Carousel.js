import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "styles/Carousel.module.scss";
import { useAppContext } from "context/state";
import AirGal from "../components/AirphotoCarousel";
import OurCarousel from "../components/OurAriaCarousel";

import Wrapper from "./Wrapper";

const ButtonGroup = ({
  next,
  previous,
  setTextCarousel,
  textC,
  textCarousel,
  ...rest
}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={style.carousel_button_group}>
      <p>{textCarousel}</p>{" "}
      <div>
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => {
            previous();
            setTextCarousel(textC[0]);
          }}
        >
          <div className={style.btn_prev}>
            <img src="/prev.png" alt="prev" />
          </div>
        </button>
        <button
          onClick={() => {
            next();
            setTextCarousel(textC[1]);
          }}
        >
          {" "}
          <div className={style.btn_next}>
            {" "}
            <img src="/next.png" alt="next" />
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 1800, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselSlider() {
  const { textCarousel, textC, setTextCarousel } = useAppContext();
  return (
    <section className={style.galery}>
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">Фотогалерея </span>
          </h3>
        </div>

        <Carousel
          className={style.bg}
          customButtonGroup={
            <ButtonGroup
              setTextCarousel={setTextCarousel}
              textCarousel={textCarousel}
              textC={textC}
            />
          }
          arrows={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
        >
          <div>
            <AirGal />
          </div>
          <OurCarousel />
        </Carousel>
      </Wrapper>
    </section>
  );
}
