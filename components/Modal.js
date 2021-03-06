
import style from "styles/Modal.module.scss";
import { useAppContext } from "context/state";

export default function Modal({children}) {
     const { showModal } = useAppContext();
  return (
    <div className={showModal ? `${style.modal}`: `${style.hidden}`}>
      <div className={style.modal_backdrop}></div>
      <div className={style.modal_content}>
        {children}
      </div>
    </div>
  );
}
