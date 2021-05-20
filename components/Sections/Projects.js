import style from "styles/Projects.module.scss";
import Wrapper from "../Wrapper";
import Image from "next/image";

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
          <div className={style.about_btn_container}>
            <Image
              className={style.about_img}
              src="/logo_repino_club.png"
              width={310}
              height={56}
            />
            <button className={style.about_btn}>
              {" "}
              <a href="/">
                repino.club{" "}
                <span className={style.about_btn_arrow}>&#x2198;</span>
              </a>{" "}
            </button>
          </div>
          <div className={style.about_text}>
            <p>
              С 2008 года успешно работает Repino Club – премиальный коттеджный
              поселок на берегу Финского залива. Гости «Репино» могут арендовать
              таунхаусы на любой срок и наслаждаться отдыхом на закрытой
              территории с инфраструктурой кантри-клаба.{" "}
            </p>
          </div>
        </div>
        <div className={style.flex_container}>
          <div className={style.flex_container_1}>
            <Image src="/projects/flex_1_1.png" width={380} height={320} />
            <div className={style.flex_img_md}>
              <Image src="/projects/flex_1_2.png" width={380} height={250} />
            </div>

            <Image src="/projects/flex_1_3.png" width={380} height={250} />
          </div>
          <div className={style.flex_container_2}>
            {" "}
            <Image src="/projects/flex_2_1.png" width={380} height={250} />
            <div className={style.flex_img_md}>
              <Image src="/projects/flex_2_2.png" width={380} height={320} />
            </div>
            <Image src="/projects/flex_2_3.png" width={380} height={250} />
          </div>
          <div className={style.flex_container_3}>
            <Image src="/projects/flex_3_1.png" width={380} height={320} />
            <div className={style.flex_img_md}>
              <Image src="/projects/flex_3_2.png" width={380} height={250} />
            </div>
            <Image src="/projects/flex_3_3.png" width={380} height={250} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
