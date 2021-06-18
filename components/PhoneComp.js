import style from "styles/Phone.module.scss";

export default function PhoneComp() {
  return (
    <div className={style.phone}>
      {" "}
      <div>
        <img src="/iconPhone.svg" className={style.icon} />
      </div>
      <a href={`tel:${process.env.PHONE}`}>{process.env.PHONE_MASK}</a>
    </div>
  );
}
