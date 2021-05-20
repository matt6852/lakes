import style from "styles/Projects.module.scss";
import Wrapper from "../Wrapper";

export default function Projects() {
  return (
    <section className={style.projects} id="projects">
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">Наши </span> проекты
          </h3>
        </div>
        <div className={style.about_center}>
          <div>
            <p>img</p>
            <p>btn</p>
          </div>
          <div>
            <p>
              С 2008 года успешно работает Repino Club – премиальный коттеджный
              поселок на берегу Финского залива. Гости «Репино» могут арендовать
              таунхаусы на любой срок и наслаждаться отдыхом на закрытой
              территории с инфраструктурой кантри-клаба.{" "}
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
