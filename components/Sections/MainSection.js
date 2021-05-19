import style from "styles/MainSection.module.scss";
import Image from "next/image";

import Wrapper from "../Wrapper";

export default function MainSection() {
  return (
    <section className={style.main_section}>
      <Wrapper>
        <div className={style.title_center}>
          <div>
            <h1>
              {" "}
              <span className="linercradient">Свобода</span> пригорода,{" "}
              <span className="linercradient">комфорт </span> города
            </h1>
          </div>
          <div className={style.btn_container}>
            <button>
              {" "}
              <a href="">Записаться на просмотр &#8594;</a>{" "}
            </button>
            <p>
              Участки под индивидуальную застройку в живописном районе
              Ленобласти
            </p>
          </div>
          <div className={style.mous}>
            <Image src="/mous.png" width={16} height={16} />
            <p>Листайте ниже</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
