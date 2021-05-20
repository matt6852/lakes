import style from "styles/History.module.scss";
import Wrapper from "../Wrapper";
import Image from "next/image";

export default function History() {
  return (
    <section className={style.history}>
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient">История </span>{" "}
            <span className ="white"> посёлка</span>
          </h3>
        </div>
      </Wrapper>
    </section>
  );
}
