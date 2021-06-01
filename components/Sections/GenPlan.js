import style from "styles/GenPlan.module.scss";
import { useAppContext } from "context/state";
import Modal from "../Modal";
import { useEffect } from "react";


export default function GenPlan() {
  const { showModal, setShowModal } = useAppContext();
   useEffect(() => {
     const chekEl = (e)=>{
       const element = e.target.classList.contains(
         "Modal_modal_backdrop__2ovNf"
       );
      if(element){
        setShowModal(false)
      }
     }
    window.addEventListener("click",chekEl)
    return ()=> {
      window.removeEventListener("click", chekEl)
    }
  }, []);
  return (
    <section className={style.gen_plan}>
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
          }}
          style={{ background: "red", marginTop: "40px" }}
        >
          modal
        </button>
      </div>
      <Modal/>
    </section>
  );
}
