import style from "styles/GenPlan.module.scss";

import { useAppContext } from "context/state";
import FormModal from "../FormModal";
import { useEffect } from "react";


export default function GenPlan() {
  const { showModal, setShowModal } = useAppContext();
   useEffect(() => {
     const chekEl = (e)=>{
       const element = e.target.classList.contains("FormModal_form_container__3RmQu")
    // if(element.classlist.c\)
    console.log(element);
      console.log("clik");
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
      <div className={showModal ? `overlay` : `${style.hidde}`}>
    
          <FormModal />
          </div>
        
    
    </section>
  );
}
