import Wrapper from "../Wrapper";
import style from "styles/Contacts.module.scss";
import YandexMap from "../YandexMap"
import Form from "../Form"


export default function Contacts() {
  return (
     <div className=".main_main_wraper">

    <section className={style.contacts} id="contacts">
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
              <p>
                Пообщайтесь с менеджерами, ознакомьтесь с проектом и
                документацией
              </p>
              <p>(нет контактов)</p>
            </div>
            <div className={style.sub_container_child_text_mob}>
              <h4>Посёлок</h4>
              <p>Влюбитесь в место, где появится дом вашей мечты</p>
              <p>(нет контактов)</p>
            </div>
            <div className={style.sub_container_child_icons}>
              
              <div>
                <span className={style.icon}>
                  <img src="/phoneFoot.svg" alt="icon" />{" "}
                </span>
                <a style ={{color:"#000"}} className={style.phone}> +1 (123) 456-78-90</a>
              </div>
              <div>
                <span className={style.icon}>
                  <img src="/message.svg" alt="icon" />
                </span>
                <a> mailexample@gmail.com</a>
              </div>
              <div>
                <span className={style.icon}>
                  <img src="/map.svg" alt="icon" />
                </span>
                <a> Каменноостровский пр. 64, корп.2</a>
              </div>
            </div>
            <div className={style.sub_container_child}>
              <div className={style.map}>
                <YandexMap />
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div>
            <div className={style.sub_container}>
              <div className={style.sub_container_child_text_desk}>
                <h4>Посёлок</h4>
                <p>Влюбитесь в место, где появится дом вашей мечты</p>
                <p className ={style.text_pading_top}>(нет контактов)</p>
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
