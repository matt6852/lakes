import style from "styles/History.module.scss";
import Wrapper from "../Wrapper";
import Image from "next/image";

export default function History() {
  return (
    <section className={style.history}>
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">История </span>{" "}
            <span className="white"> посёлка</span>
          </h3>
        </div>
        <div className={style.flex_center}>
          <div className={style.flex_center_subflex_1}>
            <div className={style.flex_item}>
              <h3 className="white">1544 год</h3>
              <p>
                Первое упоминание о финской деревне Сейвясте, после ставшей
                поселком Озерки. Уже тогда крестьянам и рыбакам понравились
                удачное расположение и уникальная природа этого места.{" "}
              </p>
            </div>
            <div className={style.flex_item}>
              <div className={style.img_container}>
                <img className={style.his_img_1} src="/history_1.png" alt="" />
              </div>
            </div>
            <div className={style.flex_item}>
              <div className={style.img_container_last}>
                <img className={style.his_img_2} src="/history_2.png" alt="" />
              </div>
            </div>
          </div>
          <div className={style.flex_center_subflex_2}>
            <div className={style.flex_item}>
              <h3 className="white">1873 год</h3>
              <p>
                Дата основания маяка Стирсудден на Сейвястовском мысе. С его
                появлением на Финском заливе воцарились безопасность и покой. В
                ясные дни корабли обходят мыс, а в плохую погоду укрываются за
                ним от шторма.
              </p>
            </div>
            <div className={style.flex_item_s}>
              <div className={style.img_container}>
                <img className={style.his_img_1} src="/history_3.png" alt="" />
              </div>
            </div>
            <div className={style.flex_item}>
              <h3 className="white">107 участков</h3>
              <p>
                находится на территории «Ярвино». Поселок сочетает в себе
                чистоту и спокойствие финской деревни и современную
                инфраструктуру. Название «Ярвино» происходит от финского Järvi —
                озеро. Расположенное неподалеку от поселка озеро станет любимым
                местом отдыха жителей поселка.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
