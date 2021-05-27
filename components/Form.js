import style from "styles/Form.module.scss";
export default function Form() {
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
      <form className={style.form}>
        <input type="text" placeholder="Ваше имя" required />
        <input type="tel" placeholder="Телефон" required />
        <input type="email" placeholder="E-mail" required />
        <textarea
          className={style.textarea}
          placeholder="Ваше сообщение"
        ></textarea>
        <div className={style.chekBox}>
          <input
            className={style.custom_checkbox}
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
