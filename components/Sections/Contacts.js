import Wrapper from "../Wrapper";
import style from "styles/Contacts.module.scss";
import HowToBuyCard from "components/HowToBuyCard";
import YandexMap from "../YandexMap"
import Form from "../Form"
import { useAppContext } from "context/state";

export default function Contacts() {
  return (
    <section className={style.contacts} id="contacts">
      <Wrapper>
        <div className={style.title}>
          <h3>
            <span className="linercradient"> Наши контакты </span>
          </h3>
        </div>
        <div className={style.main_container}>
          <div className={style.sub_container}>
            <div className={style.sub_container_child_text}>
              <h4>Центральный офис</h4>
              <p>
                Пообщайтесь с менеджерами, ознакомьтесь с проектом и
                документацией
              </p>
              <p>(нет контактов)</p>
            </div>
            <div className={style.sub_container_child_icons}>
              <div>
                <span className={style.icon}>
                  <img src="/phone_c.png" alt="icon" />{" "}
                </span>
                <p className ={style.phone}> +1 (123) 456-78-90</p>
              </div>
              <div>
                <span className={style.icon}>
                  <img src="/mail_c.png" alt="icon" />
                </span>
                <p> mailexample@gmail.com</p>
              </div>
              <div>
                <span className={style.icon}>
                  <img src="/map_c.png" alt="icon" />
                </span>
                <p> Каменноостровский пр. 64, корп.2</p>
              </div>
            </div>
            <div className={style.sub_container_child}>
              <div className={style.map}>
                  <YandexMap/>
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div>
            <div className={style.sub_container}>
              <div className={style.sub_container_child_text}>
                <h4>Посёлок</h4>
                <p>Влюбитесь в место, где появится дом вашей мечты</p>
                <p>(нет контактов)</p>
              </div>

              <div className={style.sub_container_child}>
                <div className={style.form_container}>
                  <Form/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
