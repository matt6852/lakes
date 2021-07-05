import style from "styles/Card.module.scss";

export default function Card({ title, desc, icon, list, img,imgMob,bold }) {
  return (
    <article className={style.singl_card_center}>
      <div className={style.first_box}>
        <img className={style.img_big} src={img} alt="" />
        {/* <img className={style.img_mob} src={imgMob} alt="" /> */}
      </div>
      <div className={style.second_box}>
        <div className ={style.title_flex}>
          <div className={style.fas}>
            <img className={style.img} src={`${icon}`} alt="" />
          </div>
          <h3 className={style.single_card_title}>{title}</h3>
        </div>
        <p className={style.single_card_text}> <span className ={style.bold}>{bold}</span> {desc}</p>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
