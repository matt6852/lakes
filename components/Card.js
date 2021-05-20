import style from "styles/Card.module.scss";

export default function Card({ title, desc, icon }) {
  return (
    <article className={style.singl_card}>
      <div className={style.fas}>
        <img className={style.img} src={`${icon}`} alt="" />
      </div>
      <h3 className={style.single_card_title}>{title}</h3>
      <p className={style.single_card_text}>{desc}</p>
    </article>
  );
}
