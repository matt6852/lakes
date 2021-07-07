import style from "styles/Form.module.scss";
import {
  getCountries,
  getCountryCallingCode,
  international,
} from "react-phone-number-input/input";
import InputMask from "react-input-mask";


import PhoneInput from "react-phone-number-input";
import React from "react";
// import emailjs from "emailjs-com";

import { useAppContext } from "context/state";
export default function Form() {
  
  const handlePhone =(e)=>{
    if(typeof e === "undefined"){
      return
    }
    setPhonenum(e)
    console.log(phonenum);
  }
  const { formData, setFormData, DEFAULT_DATA, phonenum, setPhonenum } =
    useAppContext();
  // EmailJSResponseStatus {status: 200, text: "OK"}

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,phonenum);
    setPhonenum("")
    const upDateForm = {
      ...formData, phone: phonenum,
      checkbox: formData.checkValue
        ? "Я согласен с политикой конфиденциальности"
        : "Я НЕ согласен с политикой конфиденциальности",
    };

    const res = await fetch('/api/contacts', {
      body: JSON.stringify(upDateForm),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json();
    setFormData(DEFAULT_DATA)

    console.log(result)
    
  };


  return (
    <>
      {/* <div
        className={
          formSub
            ? `${style.formSubmit}  ${style.formSubmit_active}`
            : `${style.formSubmit}`
        }
      >
        <h3>Спасибо {formData.name} мы в ближайшее время свяжемся с вами</h3>
      </div> */}
      <div className={style.form_title}>
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
        <PhoneInput
          className={style.input}
          international
          countryCallingCodeEditable={false}
          defaultCountry="RU"
          // international={false}
          name="phone"
          // defaultCountry="RU"
          value={phonenum}
          onChange={handlePhone}
          placeholder="Телефон"
          require="true"

          // mask ={getCountries}

          // defaultCountry="RU"
        />
        <input
          className={style.input}
          onChange={handleChanged}
          value={formData.email}
          name="email"
          type="email"
          placeholder="E-mail"
          pattern="[^ @]*@[^ @]*"
          required
        />
        <textarea
          className={style.input}
          onChange={handleChanged}
          value={formData.message}
          name="message"
          className={style.textarea}
          placeholder="Ваше сообщение"
          required
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
    </>
  );
}
