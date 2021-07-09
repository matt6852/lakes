import Wrapper from "../Wrapper";
import style from "styles/Contacts.module.scss";
import YandexMap from "../YandexMap"
import Form from "../Form"


export default function Contacts() {
  return (
    <div className=".main_main_wraper">
      <section className={style.contacts} id="#contacts">
        <Wrapper>
          <div className={style.title}>
            <h3>
              <span className="linercradient_1"> Наши контакты </span>
            </h3>
          </div>
          <div className={style.main_container}>
            <div className={style.sub_container}>
              <div className={style.sub_container_child_text}>
                <h4>Центральный офис</h4>
                {/* <p>
                  Пообщайтесь с менеджерами, ознакомьтесь с проектом и
                  документацией
                </p> */}
                <p>Санкт-Петербург, Каменноостровский пр. 64, корп.2</p>
              </div>
              <div className={style.sub_container_child_text_mob}>
                <h4>Посёлок</h4>
                {/* <p>Влюбитесь в место, где появится дом вашей мечты</p> */}
                <p>
                  {" "}
                  Ленинградская обл, Выборгский район, пос. Озерки, улица
                  Разинская
                </p>
              </div>
              <div className={style.sub_container_child_icons}>
                <div>
                  <span className={style.icon}>
                    <img src="/phoneFoot.svg" alt="icon" />{" "}
                  </span>
                  <a
                    style={{ color: "#000" }}
                    className={style.phone}
                    href={`tel:${process.env.PHONE}`}
                  >
                    {process.env.PHONE_MASK}
                  </a>
                </div>
                <div>
                  <span className={style.icon}>
                    <img src="/message.svg" alt="icon" />
                  </span>
                  <a href={`mailto:${process.env.OUR_MAIL}`}>
                    {process.env.OUR_MAIL}
                  </a>
                </div>
                {/* <div>
                  <span className={style.icon}>
                    <img src="/map.svg" alt="icon" />
                  </span>
                  <a>Санкт-Петербург, Каменноостровский пр. 64, корп.2</a>
                </div> */}
              </div>
              <div className={style.sub_container_child}>
                <div className={style.map + " yamap-wrapper"}>
                  <YandexMap />
                </div>
              </div>
            </div>
            {/* SECOND */}
            <div>
              <div className={style.sub_container}>
                <div className={style.sub_container_child_text_desk}>
                  <h4>Посёлок</h4>
                  {/* <p>Влюбитесь в место, где появится дом вашей мечты</p> */}
                  <p className={style.text_pading_top}>
                    {" "}
                    Ленинградская обл, Выборгский район, пос. Озерки, улица
                    Разинская
                  </p>
                </div>

                <div className={style.sub_container_child}>
                  <div className={style.form_container}>
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
