import style from "styles/Form.module.scss";
import { useRouter } from "next/router";

import PhoneInput from "react-phone-input-2";

// import "react-phone-input-2/lib/style.css";
import React from "react";
// import emailjs from "emailjs-com";

import { useAppContext } from "context/state";
import { useEffect } from "react";
export default function Form({ children }) {
  const router = useRouter();
  const handlePhone = (e) => {
    const inputTell = document.querySelectorAll(".form-control");
    const [first, secondInput] = inputTell;
    if (typeof e === "undefined") {
      return;
    }
    setPhonenum(e);
    console.log(phonenum);
    if (phonenum.length < 1){
      setErrorName(false);
        secondInput.style.border = "2px solid #ededed";
        first.style.border = "2px solid #EDEDED";
    } 
  };
  const {
    formData,
    setFormData,
    DEFAULT_DATA,
    phonenum,
    setPhonenum,
    erroName,
    setErrorName,
    setSingIn,
    setShowModal,
  } = useAppContext();

  useEffect(() => {}, [phonenum, erroName]);

  const handleChanged = (e) => {
 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorName(false)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(!formData.checkValue){
    //   return
    // }
    const inputTell = document.querySelectorAll(".form-control");
    const [first, secondInput] = inputTell;

    if (!formData.name || phonenum.length < 1 || !formData.checkValue) {
      setErrorName(true);
      secondInput.style.border = "2px solid rgb(231, 104, 95)";
      first.style.border = "2px solid rgb(231, 104, 95)";

      return;
    }
    if (formData.name) {
      setErrorName(false);
    }

    console.log(formData, phonenum);
    const upDateForm = {
      ...formData,
      phone: phonenum,
      checkbox: formData.checkValue
        ? "Я согласен с политикой конфиденциальности"
        : "Я НЕ согласен с политикой конфиденциальности",
    };

    const res = await fetch("/api/contacts", {
      body: JSON.stringify(upDateForm),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    setFormData(DEFAULT_DATA);
    setPhonenum("");
    setErrorName(false);

    secondInput.style.border = "3px solid #ededed";
    first.style.border = "3px solid #ededed";

    console.log(result);

    router.push("/thank_you");
    setSingIn(false);
    setShowModal(false);
  };

  return (
    <>
      <div>
        <div className={style.form_title}>
          {children}
          <h4>
            {" "}
            <span className="linercradient"> Свяжитесь</span> с нами
          </h4>
          <p>
            Оставьте ваши контакты, и наш менеджер свяжется с вами в ближайшее
            время
          </p>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          {/* <span className={style.star_1}>*</span> */}
          <input
            className={erroName ? "inputNameErr" : " inputNameErrnon"}
            value={formData.name}
            onChange={handleChanged}
            name="name"
            type="text"
            placeholder="Ваше имя"
            // required
          />

          {/* <input
          onChange={handleChanged}
          value={formData.phone}
          name="phone"
          type="tel"
          placeholder="Телефон"
          required
        /> */}
          {/* <span className={style.star_2}>*</span> */}
          <PhoneInput
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

          <input
            className={style.input}
            onChange={handleChanged}
            value={formData.email}
            name="email"
            type="email"
            placeholder="E-mail"
            pattern="[^ @]*@[^ @]*"
            // required
          />
          {/* <div className={style.container_textarea}> */}
            {/* <div className={style.placeholder_custome}>Ваше сообщение</div> */}
            <textarea
              className={style.input}
              onChange={handleChanged}
              value={formData.message}
              name="message"
              className={style.textarea}
              placeholder="Ваше сообщение"
              // required
            ></textarea>
          {/* </div> */}

          <div className={style.chekBox}>
            <input
              className={style.input}
              className={style.custom_checkbox}
              onChange={() => {
                handleChanged;
                setFormData({ ...formData, checkValue: !formData.checkValue });
              }}
              checked={formData.checkValue}
              value={formData.checkbox}
              type="checkbox"
              id="agree"
            />
            <label htmlFor="agree">
              Я согласен с{" "}
              <a
                href="/politika_konfid.pdf"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                политикой конфиденциальности
              </a>
            </label>
          </div>
          <button className={style.form_btn} type="submit">
            Отправить сообщение
          </button>
        </form>
      </div>
      {/* <div
        className={
          formSub
            ? `${style.formSubmit}  ${style.formSubmit_active}`
            : `${style.formSubmit}`
        }
      >
        <h3>Спасибо {formData.name} мы в ближайшее время свяжемся с вами</h3>
      </div> */}
    </>
  );
}
