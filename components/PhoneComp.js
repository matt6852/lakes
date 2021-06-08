import style from "styles/Phone.module.scss";

export default function PhoneComp() {
  return (
    <div className={style.phone}>
      {" "}
      <div>
        <img src="/iconPhone.svg" className={style.icon} />
      </div>
      +7 (123) 456-78-90
    </div>
  );
}
