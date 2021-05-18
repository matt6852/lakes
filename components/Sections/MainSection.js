import Image from "next/image";
import style from "styles/MainSection.module.scss";
import { FaMouse } from "react-icons/fa";

export default function MainSection() {
  return (
    <section className={style.main_section}>
      <div className={style.center}>
        <div className={style.img_container}>
          <Image
            src="/main-title.png"
            alt="Picture of the author"
            width={650}
            height={162}
          />
        </div>
        <div className={style.btn_container}>
          <button className={style.btn_main_one}>
            Записаться на просмотр &rarr;
          </button>
          <p className={style.btn_main_two}>
            Участки под индивидуальную застройку в живописном районе Ленобласти
          </p>
        </div>
      </div>
        <div className ={style.mous}>
          <FaMouse className ={style.icon} /> <span>Листайте ниже</span>
        </div>
    </section>
  );
}
