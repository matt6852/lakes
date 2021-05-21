import style from "styles/OurAriaCarousel.module.scss";

export default function OurAriaCarousel() {
  return (
    <div className={style.container}>
      <div className={style.flex_container_1}>
        <div className ={style.img_cont}>
          <img src="/flex_g_1.png" alt="" />
        </div>
        <div className ={style.img_cont}>
          <img src="/flex_g_2.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_2}>
        <div className ={style.img_cont}>
          <img src="/flex_g_3.png" alt="" />
        </div>
        <div className ={style.img_cont}>
          <img src="/flex_g_4.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_3}>
        <div className ={style.img_cont}>
          <img src="/flex_g_5.png" alt="" />
        </div>
        <div className ={style.img_cont}>
          <img src="/flex_g_6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
