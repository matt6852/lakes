import Wrapper from "../Wrapper";
import style from "styles/HowToBuy.module.scss";
import HowToBuyCard from "components/HowToBuyCard"
import { useAppContext } from "context/state";

export default function HowToBuy() {
     const { howToBuyCards } = useAppContext();
  return (
     <div className=".main_main_wraper">

    <section className={style.howtobuy} id ="#howtobuy">
      <Wrapper>
        <div className={style.title}>
          <h3>
            Как
            <span className="linercradient_1"> купить участок? </span>
          </h3>
          <p className={style.title_text}>
            Станьте собственником участка в Выборгском районе Ленобласти за 4
            простых шага
          </p>
        </div>
        <div className={style.container}>
          {howToBuyCards.map((card, index) => {
            return <HowToBuyCard key={index} {...card} />;
          })}
        </div>
      </Wrapper>
    </section>
     </div>
  );
}
