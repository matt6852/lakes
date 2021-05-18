import style from "styles/Phone.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function PhoneComp() {
  return (
    <p className={style.phone}>
      {" "}
      <FaPhoneAlt className ={style.icon} /> +7 (123) 456-78-90
    </p>
  );
}
