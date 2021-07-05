import style from "styles/AfterCarousel.module.scss";

import Wrapper from "../Wrapper";

export default function AfterCarousel() {
  return (
    <div className=".main_main_wraper">
      <section className ={style.afterCar}>
        <Wrapper>
          <div className={style.title}>
            <h3>
              <span className="linercradient">Преимущества</span>
            </h3>
          </div>
          <div className={style.main_container_flex}>
            <div className={style.card_1}>
              <div className={style.img_container}>
                <img src="/after_c_2.png" alt="" />
              </div>
              <div className={style.card_body}>
                {" "}
                <div className={style.card_title}>
                  <div className={style.img_icon}>
                    <img src="/glob.svg" alt="" />
                  </div>
                  <h4>Экология</h4>
                </div>
                <div className={style.card_text}>
                  <p>
                    Выборгский район считается одним из лучших мест для жизни в
                    Ленинградской области. Свежие ветра Балтийского взморья и
                    смешанный лес создают уникальную экологическую обстановку.
                    На вашем участке в коттеджном поселке Ярвино вы всегда
                    будете дышать чистым воздухом и наслаждаться ясным небом.
                    Выбирайте экологичный досуг: собирайте ягоды в лесу, ловите
                    рыбу в озере, отдыхайте на берегу залива или разбейте огород
                    на вашем земельном участке под строительство.{" "}
                  </p>
                </div>{" "}
              </div>
            </div>
            {/* second card */}
            <div className={style.card_2}>
              <div className={style.img_container}>
                <img src="/after_c_1.png" alt="" />
              </div>
              <div className={style.card_body}>
                <div className={style.card_title}>
                  <div className={style.img_icon}>
                    <img src="/heart.svg" alt="" />
                  </div>
                  <h4>Атмосфера</h4>
                </div>
                <div className={style.card_text}>
                  <p>
                    Ярвино – не просто еще один поселок, где каждый живет за
                    своим забором. Развитая общая инфраструктура и необходимость
                    принятия коллективных решений о развитии территории
                    способствуют тому, чтобы владельцы участков в коттеджном
                    поселке стали друзьями, а не только соседями. В Ярвино вы
                    приобретаете не просто земельный участок под строительство.
                    Вы получаете возможность построить новую жизнь в сообществе
                    единомышленников.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
