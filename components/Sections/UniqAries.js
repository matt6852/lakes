import style from "styles/UniqAries.module.scss";
import Card from "components/Card";
import { useAppContext } from "context/state";
import Wrapper from "../Wrapper";

export default function UniqAries() {
  const { uniqCards } = useAppContext();
  return (
    <div className=".main_main_wraper">
      <section id="#uniq" className={style.uniq}>
        <Wrapper>
          <div className={style.title}>
            <h3>
              <span className="linercradient">Уникальность </span> территории
            </h3>
            <p>
              Выберите земельный участок под строительство, где появится дом
              вашей мечты
            </p>
          </div>
          <div className={style.center}>
            {uniqCards.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
