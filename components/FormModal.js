import style from "styles/FormModal.module.scss";
import Wrapper from "./Wrapper";
import { useAppContext } from "context/state";


import emailjs from "emailjs-com";

export default function FormModal() {
  const { formData, setFormData, DEFAULT_DATA, setShowModal, singlLand,  } = useAppContext();
  // console.log(singlLand[0]);

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
        ...singlLand[0]
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
          setFormData(DEFAULT_DATA);
          setShowModal(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              placeholder="Ваш номер"
              required
            />
            <input
              onChange={handleChanged}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Ваш e-mail"
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
                id="agre"
              />
              <label htmlFor="agre">
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
