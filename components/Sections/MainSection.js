import style from "styles/MainSection.module.scss";
import Image from "next/image";

// import { FaArrowRight } from "react-icons/fa";
import SuperBtn from "../SuperButton";
import { useAppContext } from "context/state";
import React, { useEffect } from "react";

// FaArrowRight;

import Wrapper from "../Wrapper";

export default function MainSection() {
  const { mainSectionContainer, indexMain, setIndexMain, setShowModal,showModal , signIn, setSingIn, } =
    useAppContext();
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

    return (
      <section
        key={slidIndex}
        className={`${position} ${style.main_section} ${
          "main_section_" + slidIndex
          
        }`} 
        id ="#/"
      >
    

        <Wrapper className="z_index_1">
          {/* <FormModule/> */}
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
              <button
                className="btn"
                onClick = {()=>{
                  setShowModal(!showModal)
                  setSingIn(true)}}
              >
                {" "}
                <a>
                  {btnText}{" "}
                  <span className={style.arrow}>
                    <img src="/arrow_m.svg" className={style.fr} />
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
          .main_section_${slidIndex} {
            background: linear-gradient(
                110.31deg,
                #fbfbfb 25.32%,
                rgba(255, 255, 255, 0.8) 49.99%,
                rgba(255, 255, 255, 0) 74.3%,
                rgba(255, 255, 255, 0) 91.51%
              ),
              url(${imgBg}) center/cover;
            transition: opacity 1s ease-in-out;
            transform: translateX(-${slidIndex * 100}%);
          }

          @media (max-width: 767px) {
            .main_section_${slidIndex} {
              background: linear-gradient(
                  130.54deg,
                  rgba(251, 251, 251, 0.35) 0%,
                  rgba(251, 251, 251, 0.25) 14.67%,
                  rgba(255, 255, 255, 0.2) 23.76%,
                  rgba(255, 255, 255, 0) 38.08%,
                  rgba(255, 255, 255, 0) 50.93%
                ),
                url(${imgBg}) center/cover;
            }
          }
        `}</style>
      </section>
    );
  });
  return (
    <div className=".main_main_wraper">
      <section className={style.center_main}>{renderSection}
      <SuperBtn/>
        </section>;
    </div>
  );
}
