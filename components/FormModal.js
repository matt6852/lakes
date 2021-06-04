import style from "styles/FormModal.module.scss";
import Wrapper from "./Wrapper";
import { useAppContext } from "context/state";
import { useEffect } from "react";

import emailjs from "emailjs-com";

export default function FormModal() {
      const {
        formData,
        setFormData,
        DEFAULT_DATA,
        formSub,
        setFormSub,
        setShowModal,
      } = useAppContext();
        
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
       setShowModal(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [formSub]);
 

  return (
    <Wrapper>
      <div className={style.form_container}>
        <div className={style.place}>
          <div className={style.place_item}>
            <h4>Участок</h4>
            <p>№ 107</p>
          </div>
          <div className={style.place_item}>
            <h4>Площадь: </h4>
            <p>12,60 сот.</p>
          </div>
          <div className={style.place_item}>
            <h4>Стоимость:</h4>
            <p>2 млн руб</p>
          </div>
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
              Записаться
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
