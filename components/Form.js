import style from "styles/Form.module.scss";
// import emailjs from "emailjs-com";

import { useAppContext } from "context/state";
export default function Form() {
  const { formData, setFormData, DEFAULT_DATA,} =
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
    const upDateForm = {
      ...formData,
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
        <textarea
          onChange={handleChanged}
          value={formData.message}
          name="message"
          className={style.textarea}
          placeholder="Ваше сообщение"
          required
        ></textarea>
        <div className={style.chekBox}>
          <input
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
            Я согласен с политикой конфиденциальности
          </label>
        </div>
        <button className={style.form_btn} type="submit">
          Отправить сообщение
        </button>
      </form>
    </>
  );
}
