import style from "styles/Thanks.module.scss";
import Link from "next/link"

export default function Tnhank_Main() {
  return (
    <section className={style.thanks}>
      <div className={style.main_cont}>
        <h1>
          <span className="linercradient">Спасибо </span>за заявку!
        </h1>
        <p>Мы свяжемся с вами в ближайшее время</p>
        <button className={style.btn}>
          <Link href="/"> Вернуться на главную</Link>
          <span className={style.arrow}>
            <img src="/arrow_m.svg" className={style.fr} />
          </span>{" "}
        </button>
      </div>
    </section>
  );
}
