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
  index,
  setIndex,
  textC,

  ...rest
}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  const checkNumb = (numb) => {
    if (numb > textC.length - 1) {
      return textC.length - 1;
    }
    if (numb < 0) {
      return 0;
    }
    return numb;
  };
  return (
    <div className={style.carousel_button_group}>
      <p>{textC[index]}</p>{" "}
      <div>
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => {
            previous();
            setIndex((index) => {
              let newIndex = index - 1;
              return checkNumb(newIndex);
            });
          }}
        >
          <div className={style.btn_prev}>
            <img src="/prev.png" alt="prev" />
          </div>
        </button>
        <button
          onClick={() => {
            next();
            setIndex((index) => {
              let newIndex = index + 1;
              return checkNumb(newIndex);
            });
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

const ButtonGroupMob = ({
  next,
  previous,
  setTextCarousel,
  index,
  setIndex,
  carouselimgMob,
  ...rest
}) => {
  const checkNumb = (numb) => {
    if (numb > carouselimgMob.length - 1) {
      return carouselimgMob.length - 1;
    }
    if (numb < 0) {
      return 0;
    }
    return numb;
  };
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={style.carousel_button_group}>
      <p>{carouselimgMob[index].title}</p>{" "}
      <div>
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => {
            previous();

            setIndex((index) => {
              let newIndex = index - 1;
              return checkNumb(newIndex);
            });
          }}
        >
          <div className={style.btn_prev}>
            <img src="/prev.png" alt="prev" />
          </div>
        </button>
        <button
          onClick={() => {
            next();
            setIndex((index) => {
              let newIndex = index + 1;
              return checkNumb(newIndex);
            });
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
  const { textC,  index, setIndex, carouselimgMob } = useAppContext();
  return (
    <section className={style.galery} id="galary">
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">Фотогалерея </span>
          </h3>
        </div>

        <Carousel
          className={style.bg}
          customButtonGroup={
            <ButtonGroup textC={textC} index={index} setIndex={setIndex} />
          }
          arrows={false}
          responsive={responsive}
          swipeable={false}
          ssr={true} // means to render carousel on server-side.
        >
          <AirGal />
          <OurCarousel />
        </Carousel>

        {/* mobCar */}
        <Carousel
          className={style.mb}
          customButtonGroup={
            <ButtonGroupMob
              carouselimgMob={carouselimgMob}
              index={index}
              setIndex={setIndex}
            />
          }
          arrows={false}
          responsive={responsive}
          swipeable={false}
          ssr={true} // means to render carousel on server-side.
        >
          {/* {carouselimgMob.map((item, index) => {
            return (
              <div key={index} className={style.mob_gal}>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })} */}
          <div className={style.airPhoto}>
            <div className={style.video_container}>
              <video
               
                className={style.video}
                src="/video.mp4"
                poster="/video_bg.png"
              ></video>
              <div  className={style.btns}>
                <div>
                  {" "}
                  <img
                    className={`${style.show}`}
                    src="/playVideo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.mob_gal}>
            <div>
              <img src="/mob_g_1.png" alt="" />
            </div>
          </div>
          <div className={style.mob_gal}>
            <div>
              <img src="/mob_g_2.png" alt="" />
            </div>
          </div>
          <div className={style.mob_gal}>
            <div>
              <img src="/mob_g_3.png" alt="" />
            </div>
          </div>
          <div className={style.mob_gal}>
            <div>
              <img src="/mob_g_4.png" alt="" />
            </div>
          </div>
          <div className={style.mob_gal}>
            <div>
              <img src="/mob_g_5.png" alt="" />
            </div>
          </div>
        </Carousel>
      </Wrapper>
    </section>
  );
}
