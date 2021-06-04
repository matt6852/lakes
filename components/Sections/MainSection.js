import style from "styles/MainSection.module.scss";
import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import SuperBtn from "../SuperButton";
import { useAppContext } from "context/state";
import React, { useEffect } from "react";

// FaArrowRight;

import Wrapper from "../Wrapper";

export default function MainSection() {
  const { mainSectionContainer, indexMain, setIndexMain } = useAppContext();
  const renderSection = mainSectionContainer.map((item, slidIndex) => {
    const {
      imgBg,
      textColorTop,
      textColorBottom,
      textTop,
      textBottom,
      btnText,
      paragraph,
      imgMous,
      maousText,
    } = item;
    let position = "not_active";
    if (slidIndex === indexMain) {
      position = "active";
    }
    useEffect(() => {
      const lastIndex = mainSectionContainer.length - 1;
      if (indexMain > lastIndex) {
        setIndexMain(0);
      }

      const interval = setInterval(() => {
        setIndexMain(indexMain + 1);
      }, 7000);
      return () => clearInterval(interval);
    }, [indexMain]);

    return (
      <section key={slidIndex} className={`${position} ${style.main_section} `}>
        <Wrapper className="z_index_1">
          <div className={style.title_center}>
            <div>
              <h1>
                {" "}
                <span className="linercradient">{textColorTop}</span> {textTop},{" "}
                <span className="linercradient">{textColorBottom} </span>{" "}
                {textBottom}
              </h1>
            </div>
            <div className={style.btn_container}>
              <button className="btn">
                {" "}
                <a href="#contacts">
                  {btnText}{" "}
                  <span className={style.arrow}>
                    <img src="/arrow_btn.png" className={style.fr} />
                  </span>{" "}
                </a>{" "}
              </button>
              <p>{paragraph}</p>
            </div>
            <div className={style.mous}>
              <Image
                className={style.mous_1}
                src={imgMous}
                width={16}
                height={16}
              />
              <p>{maousText}</p>
            </div>
          </div>
        </Wrapper>
        <style jsx>{`
          .MainSection_main_section__2oUNM {
            background: linear-gradient(
                110.31deg,
                #fbfbfb 25.32%,
                rgba(255, 255, 255, 0.8) 49.99%,
                rgba(255, 255, 255, 0) 74.3%,
                rgba(255, 255, 255, 0) 91.51%
              ),
              url(${imgBg}) center/cover;
            transition: opacity 1s ease-in-out;
            transform: translate(${indexMain * -100}%, 0);
          }
        `}</style>
      </section>
    );
  });
  return <section className={style.center_main}>{renderSection}</section>;
}
