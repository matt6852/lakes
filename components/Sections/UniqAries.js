import style from "styles/UniqAries.module.scss";
import Card from "components/Card";
import { useAppContext } from "context/state";

export default function UniqAries() {
  const { uniqCards } = useAppContext();
  return (
    <section id ="uniq" className={style.uniq}>
      <div className={style.title}>
        <h3>
          <span>Уникальность </span> территории
        </h3>
      </div>
      <div className={style.center}>{uniqCards.map((card,index)=>{
          return <Card {...card}/>
      })}</div>
    </section>
  );
}
