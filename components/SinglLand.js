import style from "styles/SinglLand.module.scss";

export default function SinglLand({
  id,
  sizeMetr,
  sizeSot,
  price,
  occupied,
  img,
}) {
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
        <p className={style.item}>{occupied ? "Занят" : "Свободен"}</p>
        <div>
          <button>Записаться на просмотр</button>
        </div>
      </div>
    </>
  );
 
}
