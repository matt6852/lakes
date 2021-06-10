import style from "styles/Projects.module.scss";
import Wrapper from "../Wrapper";

export default function Projects() {
  return (
     <div className=".main_main_wraper">

    <section className={style.projects} id="projects">
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">Наши </span> проекты
          </h3>
        </div>
        <div className={style.about_center}>
          <div className={style.about_btn_container}>
            <div className={style.img_cont}>
              <img className={style.about_img} src="/logo_repino_club.png" />
            </div>
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
          {/* dwskTop */}
          <div className={style.flex_container_1}>
            <img className={style.mobile_1_1} src="/projects/flex_1_1.png" />
            <div className={style.flex_img_md}>
              <img className={style.mobile_1_2} src="/projects/flex_1_2.png" />
            </div>

            <img className={style.mobile_1_3} src="/projects/flex_1_3.png" />
          </div>
          <div className={style.flex_container_2}>
            {" "}
            <img className={style.mobile_2_1} src="/projects/flex_2_1.png" />
            <div className={style.flex_img_md}>
              <img className={style.mobile_2_2} src="/projects/flex_2_2.png" />
            </div>
            <img className={style.mobile_2_3} src="/projects/flex_2_3.png" />
          </div>
          <div className={style.flex_container_3}>
            <img className={style.mobile_3_1} src="/projects/flex_3_1.png" />
            <div className={style.flex_img_md}>
              <img className={style.mobile_3_2} src="/projects/flex_3_2.png" />
            </div>
            <img className={style.mobile_3_3} src="/projects/flex_3_3.png" />
          </div>
          {/* mobile */}
        </div>
        <div className={style.container_mob}>
          <div className={style.container_mob_flex}>
            <div className="col">
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_1_1.png" />
              </div>
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_1_2.png" />
              </div>
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_1_3.png" />
              </div>
            </div>
            <div className="col">
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_2_1.png" />
              </div>
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_2_2.png" />
              </div>
              <div className={style.container_img}>
                <img className={style.mobile} src="/mob_pic/mob_pic_2_3.png" />
              </div>
            </div>
          </div>
          <div className={style.container_c}>
            <img className={style.mobile} src="/mob_pic/mob_pic_c.png" />
          </div>
        </div>
      </Wrapper>
    </section>
     </div>
  );
}
