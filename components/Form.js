import style from "styles/Form.module.scss";
import axios from "axios"
import emailjs from "emailjs-com";

import { useAppContext } from "context/state";
export default function Form() {
   const { formData, setFormData } = useAppContext();

const handleChanged =(e)=>{
  const {name,value} =e.target
   ;
  setFormData({ ...formData, [name]: value, checkbox: e.target.checked });
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  // await axios.post("/api/contacts",formData)
  emailjs
    .sendForm(
      "service_gej9vot",
      "template_3wk5pkg",
      e.target,
      "user_nDJzQY1xmY9wOoUJQzobR"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  
}

  return (
    <>
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
      <form onSubmit ={handleSubmit} className={style.form}>
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
        ></textarea>
        <div className={style.chekBox}>
          <input className={style.custom_checkbox} onChange ={handleChanged} value={formData.checkbox} type="checkbox" id="agree" />
          <label htmlFor="agree">
            Я согласен с политикой конфиденциальности
          </label>
        </div>
        <button
          className={style.form_btn}
          type="submit"
        >
          Отправить сообщение
        </button>
      </form>
    </>
  );
}
