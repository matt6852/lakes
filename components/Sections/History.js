import style from "styles/History.module.scss";
import Wrapper from "../Wrapper";

export default function History() {
  return (
    <div className=".main_main_wraper">
      <section className={style.history}>
        <Wrapper>
          <div className={style.title}>
            <h3>
              <span className="linercradient">История </span>{" "}
              <span className="white"> посёлка</span>
            </h3>
          </div>

          <div className={style.main_cont}>
            <div className={style.text_flex_top}>
              <div className={style.first_text}>
                <h4>1544 год</h4>
                <p>
                  <span>Первое упоминание</span> о финской деревне Сейвясте,
                  после ставшей поселком Озерки. Уже тогда крестьянам и рыбакам
                  понравились удачное{" "}
                  <span>расположение и уникальная природа</span> этого места.{" "}
                </p>
              </div>
              <div className={style.second_text}>
                <h4>1873 год</h4>
                <p>
                  <span>Дата основания</span> маяка Стирсудден на Сейвястовском
                  мысе. С его появлением на Финском заливе воцарились{" "}
                  <span>безопасность и покой</span> . В ясные дни корабли
                  обходят мыс, а в плохую погоду укрываются за ним от шторма.{" "}
                </p>
              </div>
            </div>
            <div className={style.img_cont_midl}>
              <div className={style.img_midl_1}>
                <img src="/history_1.png" alt="" />
              </div>
              <div className={style.img_midl_2}>
                <img src="/history_3.png" alt="" />
              </div>
            </div>
            <div className={style.last_cont}>
              <div className={style.img_last}>
                <img src="/history_2.png" alt="" />
              </div>
              <div className={style.last_text}>
                <h4>107 участков</h4>
                <p>
                  находится на территории «Ярвино». Поселок сочетает в себе
                  чистоту и спокойствие финской деревни и современную
                  инфраструктуру. Название «Ярвино» происходит от финского Järvi
                  — озеро. Расположенное неподалеку от поселка озеро станет
                  любимым местом отдыха жителей поселка.
                </p>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className={style.main_cont_mob}>
            <div className={style.text_flex_top_mob}>
              <div className={style.first_text_mob}>
                <h4>1544 год</h4>
                <p>
                  <span>Первое упоминание</span> о финской деревне Сейвясте,
                  после ставшей поселком Озерки. Уже тогда крестьянам и рыбакам
                  понравились{" "}
                  <span>удачное расположение и уникальная природа</span> этого
                  места.{" "}
                </p>
              </div>
              <div className={style.first_img_mob}>
                <img src="/history_1_m.png" alt="" />
              </div>
            </div>
            <div className={style.flex_midl}>
              <div className={style.midl_text}>
                <h4>1873 год</h4>
                <p>
                  <span>Дата основания</span> маяка Стирсудден на Сейвястовском
                  мысе. С его появлением на Финском заливе воцарились
                  безопасность и покой. В ясные дни корабли обходят мыс, а в
                  плохую погоду укрываются за ним от шторма.{" "}
                </p>
              </div>
              <div className={style.img_midl_2}>
                <img src="/history_2_m.png" alt="" />
              </div>
            </div>
            <div className={style.last_cont_mob}>
              <div className={style.last_text_mob}>
                <h4>107 участков</h4>
                <p>
                  находится на территории «Ярвино». Поселок сочетает в себе
                  чистоту и спокойствие финской деревни и современную
                  инфраструктуру. Название «Ярвино» происходит от финского Järvi
                  — озеро. Расположенное неподалеку от поселка озеро станет
                  любимым местом отдыха жителей поселка.
                </p>
              </div>
              <div className={style.img_last_mob}>
                <img src="/history_3_m.png" alt="" />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
