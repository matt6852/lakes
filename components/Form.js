import style from "styles/Form.module.scss";

import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import React from "react";
// import emailjs from "emailjs-com";

import { useAppContext } from "context/state";
import { useEffect } from "react";
export default function Form({children}) {
  const handlePhone = (e) => {
    if (typeof e === "undefined") {
      return;
    }
    setPhonenum(e);
    console.log(phonenum);
  };
  const { formData, setFormData, DEFAULT_DATA, phonenum, setPhonenum } =
    useAppContext();
  // EmailJSResponseStatus {status: 200, text: "OK"}
  useEffect(() => {}, [phonenum]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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


    console.log(result);
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
          <span className={style.star_1}>*</span>
          <input
            className={style.input}
            value={formData.name}
            onChange={handleChanged}
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
          />

          {/* <input
          onChange={handleChanged}
          value={formData.phone}
          name="phone"
          type="tel"
          placeholder="Телефон"
          required
        /> */}
          <span className={style.star_2}>*</span>
          <PhoneInput
            className={style.input}
            inputProps={{
              name: "phone",
              required: true,
           
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
          <textarea
            className={style.input}
            onChange={handleChanged}
            value={formData.message}
            name="message"
            className={style.textarea}
            placeholder="Ваше сообщение"
            // required
          ></textarea>
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
