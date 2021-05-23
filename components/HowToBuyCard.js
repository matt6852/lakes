import style from "styles/CardHowToBuy.module.scss";

export default function HowToBuyCard({ title, desc, icon, imgNum }) {
  return (
    <article className={style.singl_card}>
      <div className={style.icon_conteiner}>
        <img className={style.img} src={`${icon}`} alt="" />
      </div>
      <h3 className={style.single_card_title}>{title}</h3>
      <p className={style.single_card_text}>{desc}</p>
      <img className ={style.number} src={`${imgNum}`} alt="" />
    </article>
  );
}
