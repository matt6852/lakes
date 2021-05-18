
import style from "styles/Card.module.scss"

export default function Card({title,desc}) {
    return (
      <article className= {style.services__single_service}>
        <div className={style.services__single_service_icon}>
          {" "}
          <i className={style.fas}>icon</i>
        </div>
        <h3 className={style.services__single_service_title}>{title}</h3>
        <p className={style.services__single_service_text}>
          {desc}
        </p>
      </article>
    );
}
