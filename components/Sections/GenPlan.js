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
  useEffect(()=>{

  },[data])

  // function handle sort by price

  const sortByPrice = (type) => {
    const types = {
      all: "all",
      max: "max",
      min: "min",
    };
    if (types.max === type) {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setData(sorted);
      console.log(sorted);
    } else if (types.min === type) {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setData(sorted);
      console.log(sorted);
    } else {
      const sorted = [...data].sort((a, b) => a.id - b.id);
      setData(sorted);
    }
  };
  // function handle sort by size

  const sortBySize = (type) => {
    const types = {
      origin: "origin",
      big: "big",
      small: "small",
    };
    if (types.big === type) {
      const sorted = [...data].sort((a, b) => b.sizeMetr - a.sizeMetr);
      setData(sorted);
      console.log(sorted);
    } else if (types.small === type) {
      const sorted = [...data].sort((a, b) => a.sizeMetr - b.sizeMetr);
      setData(sorted);
      console.log(sorted);
    } else {
      const sorted = [...data].sort((a, b) => a.id - b.id);
      setData(sorted);
    }
  };

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
      </div>
      <Modal />

      {/* filter area */}
      <Wrapper>
        <div className={style.filter_container}>
          <div className={style.filter_btns}>
            <div className={style.btn_container}>
              <label htmlFor="price" className={style.title}>
                Стоимость участка:
              </label>
              <select onChange={(e) => sortByPrice(e.target.value)} id="price">
                <option value="all">Все {data.length}</option>
                <option value="max">max</option>
                <option value="min">min</option>
              </select>
            </div>
            <div className={style.btn_container}>
              <label className={style.title} htmlFor="size">
                Площадь:
              </label>
              <select onChange={(e) => sortBySize(e.target.value)} id="size">
                <option value="origin">Все {data.length}</option>
                <option value="big">big</option>
                <option value="small">small</option>
              </select>
            </div>
            <div className={style.btn_container}>
              <label className={style.title} htmlFor="structure">
                Инфраструктура:
              </label>
              <select name="" id="structure">
                <option value="1">Все {data.length}</option>
                <option value="2">2</option>
                <option value="2">3</option>
              </select>
            </div>
          </div>

          <div className={style.title_categories}>
            <p className={style.item_1}>№ участка:</p>
            <p className={style.item_2}>Геометрия:</p>
            <p className={style.item_3}>Площадь:</p>
            <p className={style.item_4}>Цена при 100% оплате:</p>
            <p className={style.item_5}>Статус:</p>
            <p className={style.item_6}>Запись на просмотр:</p>
          </div>
          <div className={style.render_lands}>
            {data
              .map((item, index) => {
                return <SinglLand key={item.id} {...item} />;
              })
              .slice(0, end)}
          </div>
          <div className={style.btn_center}>
            <button className={style.btn} onClick={() => setEnd(end + 4)}>
              Смотреть больше участков
            </button>
          </div>
        </div>
      </Wrapper>
      {/* end of filter area */}
    </section>
  );
}
