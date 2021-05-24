import style from "styles/MainSection.module.scss";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import SuperBtn from "../SuperButton";

// FaArrowRight;

import Wrapper from "../Wrapper";

export default function MainSection() {
  return (
    <section className={style.main_section}>
      <Wrapper className="z_index_1">
        <div className={style.title_center}>
          <div>
            <h1>
              {" "}
              <span className="linercradient">Свобода</span> пригорода,{" "}
              <span className="linercradient">комфорт </span> города
            </h1>
          </div>
          <div className={style.btn_container}>
            <button className="btn">
              {" "}
              <a href ="#contacts">
                Записаться на просмотр{" "}
                <span className={style.arrow}>
                  <FaArrowRight className={style.fr} />
                </span>{" "}
              </a>{" "}
            </button>
            <p>
              Участки под индивидуальную застройку в живописном районе
              Ленобласти
            </p>
          </div>
          <div className={style.mous}>
            <Image
              className={style.mous_1}
              src="/icons/mous.png"
              width={16}
              height={16}
            />
            <p>Листайте ниже</p>
          </div>
        </div>
        <SuperBtn/>
      </Wrapper>
    </section>
  );
}
