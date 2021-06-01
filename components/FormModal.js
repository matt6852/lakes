import style from "styles/FormModal.module.scss";
import Wrapper from "./Wrapper";
import { useAppContext } from "context/state";
import { useEffect } from "react";

import emailjs from "emailjs-com";

export default function FormModal() {
      const { formData, setFormData, DEFAULT_DATA, formSub, setFormSub } =
        useAppContext();
        
  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    setFormSub(true);
    e.preventDefault();
    const upDateForm = {
      ...formData,
      checkbox: formData.checkValue
        ? "Я согласен с политикой конфиденциальности"
        : "Я НЕ согласен с политикой конфиденциальности",
    };

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLETE_ID,
        upDateForm,
        process.env.API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormSub(false);
      setFormData(DEFAULT_DATA);
    }, 2000);
    return () => clearTimeout(timer);
  }, [formSub]);

  return (
    <div className={style.form_container}>
      <Wrapper>
        <div className={style.fixed}>
          <div className={style.form_title}>
            <h4>
              {" "}
              <span className="linercradient"> Свяжитесь</span> с нами
            </h4>
            <p>
              Оставьте ваши контакты и наш менеджер свяжется с вами в ближайшее
              время
            </p>
          </div>
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              value={formData.name}
              onChange={handleChanged}
              name="name"
              type="text"
              placeholder="Ваше имя"
              required
            />
            <input
              onChange={handleChanged}
              value={formData.phone}
              name="phone"
              type="tel"
              placeholder="Телефон"
              required
            />
            <input
              onChange={handleChanged}
              value={formData.email}
              name="email"
              type="email"
              placeholder="E-mail"
              required
            />
            <div className={style.chekBox}>
              <input
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
                id="agree"
              />
              <label htmlFor="agree">
                Я согласен с политикой конфиденциальности
              </label>
            </div>
            <button className={style.form_btn} type="submit">
              Отправить сообщение
            </button>
          </form>
        </div>
      </Wrapper>
      {/* <div
          className={
            formSub
              ? `${style.formSubmit}  ${style.formSubmit_active}`
              : `${style.formSubmit}`
          }
        >
          <h3>Спасибо {formData.name} мы в ближайшее время свяжемся с вами</h3>
        </div> */}
    </div>
  );
}
