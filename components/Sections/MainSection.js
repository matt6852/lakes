import style from "styles/MainSection.module.scss";
import { FaMouse } from "react-icons/fa";
import Wrapper from "../Wrapper";

export default function MainSection() {
  return (
    <section className={style.main_section}>
      <Wrapper>
        <div className={style.center}>
          <div className={style.title_container}>
            <h1>
              {" "}
              <span> Свобода</span> пригорода, <span>комфорт</span> города
            </h1>
          </div>
          <div className={style.btn_container}>
            <button className={style.btn_main_one}>
              Записаться на просмотр &rarr;
            </button>
            <p className={style.btn_main_two}>
              Участки под индивидуальную застройку в живописном районе
              Ленобласти
            </p>
          </div>
        </div>
        <div className={style.mous}>
          <FaMouse className={style.icon} /> <span>Листайте ниже</span>
        </div>
      </Wrapper>
    </section>
  );
}
