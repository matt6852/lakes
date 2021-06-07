import style from "styles/SinglLand.module.scss";
import { useAppContext } from "context/state";
export default function SinglLand({
  id,
  sizeMetr,
  sizeSot,
  price,
  occupied,
  img,
}) {
    const { showModal, setShowModal, setSinglLand,data } =
    useAppContext();
   
  return (
    <>
      <div className={style.singlLand_container}>
        <p className={style.item}>{id}</p>
        <div className={style.item}>
          <p>img</p>
          <img src={img} alt="" />
        </div>
        <p className={style.item}>{sizeSot} сот.</p>
        <p className={style.item}>{price} руб.</p>
        <p className={`${style.item} ${style.color_green}`}>{occupied ? "Занят" : "Свободен"}</p>
        <div>
          <button className ={style.btn}
            onClick={() => {
              setShowModal(!showModal);

            const filtered = data.filter((item)=> item.id ===id)
            setSinglLand(filtered)
            }}
          >
            Записаться на просмотр
          </button>
        </div>
      </div>
    </>
  );
 
}
