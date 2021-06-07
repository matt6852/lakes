import style from "styles/GenPlan.module.scss";
import { useAppContext } from "context/state";
import Modal from "../Modal";
import { useEffect } from "react";
import Wrapper from "../Wrapper";
import SinglLand from "../SinglLand";

export default function GenPlan() {
  const {
    showModal,
    setShowModal,
    data,
    setData,
    start,
    setStart,
    end,
    setEnd,
  } = useAppContext();
  // function to change data or sort it
  const sortArray = (type) => {
    const types = {
      all: "all",
      max: "max",
      min: "min",
    };
    const sortProperty = types[type];
    const sorted = data.sort((a, b) => b.price - a.price);
    console.log(sorted);
    setData(sorted);
  };

  // console.log(lands.slice(0,10));
  useEffect(() => {
    const chekEl = (e) => {
      const element = e.target.classList.contains(
        "Modal_modal_backdrop__2ovNf"
      );
      if (element) {
        setShowModal(false);
      }
    };
    window.addEventListener("click", chekEl);
    return () => {
      window.removeEventListener("click", chekEl);
    };
  }, []);
  useEffect(() => {}, [start,data]);
  return (
    <section id="genplan" className={style.gen_plan}>
      <div className={style.title}>
        <h3>
          <span className="linercradient">Генеральный </span> план
        </h3>
        <p>
          Выберите один из <span>{data.length}</span> участков и реализуйте все
          ваши мечты об идеальном отдыхе на природе
        </p>
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
          style={{ background: "red", marginTop: "40px" }}
        >
          modal
        </button>
      </div>
      <Modal />

      {/* filter area */}
      <Wrapper>
        <div className={style.filter_container}>
          <div className={style.filter_btns}>
            <div className={style.btn_container}>
              <label htmlFor="price">Стоимость участка:</label>
              <select onChange ={(e)=>sortArray(e.target.value)} name="" id="price">
                <option value="all">Все {data.length}</option>
                <option value="max">max</option>
                <option value="min">min</option>
              </select>
            </div>
            <div className={style.btn_container}>
              <label htmlFor="size">Площадь:</label>
              <select name="" id="size">
                <option value="1">Все {data.length}</option>
                <option value="2">2</option>
                <option value="2">3</option>
              </select>
            </div>
            <div className={style.btn_container}>
              <label htmlFor="structure">Инфраструктура:</label>
              <select name="" id="structure">
                <option value="1">Все {data.length}</option>
                <option value="2">2</option>
                <option value="2">3</option>
              </select>
            </div>
          </div>

          <div className={style.title_categories}>
            <p>№ участка:</p>
            <p>Геометрия:</p>
            <p>Площадь:</p>
            <p>Цена при 100% оплате:</p>
            <p>Статус:</p>
            <p>Запись на просмотр:</p>
          </div>
          <div className={style.render_lands}>
            {data
              .map((item, index) => {
                return <SinglLand key={item.id} {...item} />;
              })
              .slice(start, end)}
            <button
              onClick={() => {
                setStart(end);
                setEnd(end + 5);
                if (end >= data.length) {
                  setEnd(data.length);
                  setStart(data.length - 5);
                }
              }}
            >
              Смотреть больше участков
            </button>
          </div>
        </div>
      </Wrapper>
      {/* end of filter area */}
    </section>
  );
}
