import style from "styles/Phone.module.scss";


export default function PhoneComp() {
  return (
    <p className={style.phone}>
      {" "}
      <img src="/mob_icon.png" className ={style.icon} /> +7 (123) 456-78-90
    </p>
  );
}
