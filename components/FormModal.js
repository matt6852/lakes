import style from "styles/FormModal.module.scss";
import Wrapper from "./Wrapper";
import { useAppContext } from "context/state";
import { useRouter } from "next/router";

// import PhoneInput from "react-phone-input";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

import { SendEmail, SendDataToCrm } from './contacts';


// import emailjs from "emailjs-com";

export default function FormModal() {
  const router = useRouter();


 
  const {
    formData,
    setFormData,
    DEFAULT_DATA,
    setShowModal,
    singlLand,
    phonenum,
    setPhonenum,
    erroName,
    setErrorName,
  } = useAppContext();
 const handlePhone = (e) => {
    const inputTell = document.querySelectorAll(".form-control");
    const [first, secondInput] = inputTell;

   if (typeof e === "undefined") {
    
     return;
   }
   setPhonenum(e);
    if (phonenum.length < 1) {
      setErrorName(false);
      secondInput.style.border = "2px solid #ededed";
      first.style.border = "2px solid #EDEDED";
    } 
 
 
 };
 

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
setErrorName(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     const inputTell = document.querySelectorAll(".form-control");
     const [first, secondInput] = inputTell;

     if (!formData.name || phonenum.length < 1) {
       setErrorName(true);
       secondInput.style.border = "2px solid rgb(231, 104, 95)";
       first.style.border = "2px solid rgb(231, 104, 95)";

       return;
     }
  
    const upDateForm = {
      ...formData,
      phone: phonenum,
      checkbox: formData.checkValue
        ? "Я согласен с политикой конфиденциальности"
        : "Я НЕ согласен с политикой конфиденциальности",
      ...singlLand[0],
    };

    const res = await SendEmail(upDateForm);
    const resCrm = await SendDataToCrm(upDateForm);
    
    const result = await res.json();

    setFormData(DEFAULT_DATA);
    setShowModal(false);
    setPhonenum("");
    setErrorName(false);

    secondInput.style.border = "3px solid #ededed";
    first.style.border = "3px solid #ededed";

    console.log(result);
    router.push("/thank_you");

  };

  return (
    <Wrapper>
      <div className={style.form_container}>
        <div className={style.place}>
          <div className={style.place_item}>
            <h5>Участок:</h5>
            <p style={{ paddingLeft: "5px" }}>№ {singlLand[0]?.id}</p>
          </div>
          <div className={style.place_item}>
            <h5>Площадь: </h5>
            <p style={{ paddingLeft: "5px" }}>{singlLand[0]?.sizeSot} сот.</p>
          </div>
          <div className={style.place_item}>
            <h5>Стоимость:</h5>
            <p style={{ paddingLeft: "5px" }}>{singlLand[0]?.price} руб</p>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className={style.btn_close}
          >
            &#10005;
          </button>
        </div>
        <div className={style.fixed}>
          <div className={style.form_title}>
            <h4>
              {" "}
              <span className="linercradient"> Записаться на просмотр</span>
            </h4>
            <p>
              Оставьте ваши контакты и мы свяжемся с вами для уточнения деталей
              по вашей записи
            </p>
          </div>
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              className={erroName ? "inputNameErr" : "inputNameErrnon"}
              value={formData.name}
              onChange={handleChanged}
              name="name"
              type="text"
              placeholder="Ваше имя"
              // required
            />
            <PhoneInput
              // className={style.input}
              inputProps={{
                name: "phone",
                // required: true,
              }}
              country="ru"
              name="phone"
              value={phonenum}
              onChange={handlePhone}
              placeholder="Телефон"
            />
            {/* <input
              onChange={handleChanged}
              value={formData.phone}
              name="phone"
              type="number"
              placeholder="Телефон"
              required
            /> */}
            <input
              className={style.input}
              onChange={handleChanged}
              value={formData.email}
              name="email"
              type="email"
              placeholder="E-mail"

              // required
            />
            <div className={style.chekBox}>
              <input
                // className={style.input}
                className={style.custom_checkbox}
                onChange={() => {
                  handleChanged;
                  setFormData({
                    ...formData,
                    checkValue: !formData.checkValue,
                  });
                }}
                checked={formData.checkValue}
                value={formData.checkbox}
                type="checkbox"
                id="agre"
              />
              <label htmlFor="agre">
                Я согласен с{" "}
                <a
                  href="/politika_konfid.pdf"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                    zIndex: "1",
                    cursor: "pointer",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  политикой конфиденциальности{" "}
                </a>
              </label>
            </div>
            <button className={style.form_btn} type="submit">
              Записаться
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
