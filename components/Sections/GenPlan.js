import style from "styles/GenPlan.module.scss";
import Wrapper from "../Wrapper";
import { useAppContext } from "context/state";
import FormModal from "../FormModal";

export default function GenPlan() {
  const { showModal, setShowModal } = useAppContext();
  return (
    <section className={style.gen_plan}>
      {/* <Wrapper> */}
      <div className={style.title}>
        <h3>
          <span className="linercradient">Генеральный </span> план
        </h3>
        <p>
          Выберите один из 118 участков и реализуйте все ваши мечты об идеальном
          отдыхе на природе
        </p>
        <button
          onClick={() => {
            setShowModal(!showModal);
            console.log("show");
          }}
          style={{ background: "red", marginTop: "40px" }}
        >
          modal
        </button>
      </div>
      <div className={showModal ? `modal` : `${style.hidde}`}>
        <FormModal />
      </div>
      {/* <div className = "modal"></div> */}
      {/* </Wrapper> */}
    </section>
  );
}
