import style from "styles/GenPlan.module.scss";
import { useAppContext } from "context/state";
import Modal from "../Modal";
import { useEffect } from "react";
import Wrapper from "../Wrapper";
import MainPlanSvg from "../MainPlanSvg";
import SinglLand from "../SinglLand";

export default function GenPlan() {
  const { setShowModal, data, setData, end, setEnd, activPlan, setActivePlan } =
    useAppContext();
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
  useEffect(() => {
    //  const svgEl = document.querySelector(".1")
    //  console.log(svgEl);
  }, [data]);

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
      // console.log(sorted);
    } else if (types.min === type) {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setData(sorted);
      // console.log(sorted);
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
      // console.log(sorted);
    } else if (types.small === type) {
      const sorted = [...data].sort((a, b) => a.sizeMetr - b.sizeMetr);
      setData(sorted);
      // console.log(sorted);
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
      {/* <div className={style.main_main_wraper}> */}
      <div className="main_main_wraper">
        <div className={style.genPlan_svg_container}>
          <MainPlanSvg />
          <div className={style.btn_container_genPlan}>
            <div className={style.active_btns}>
              <button
                className={
                  activPlan === 0 ? `${style.btn_active}` : `${style.btn}`
                }
                onClick={() => {
                  setActivePlan(0);
                }}
              >
                Генплан
              </button>
              <button
                className={
                  activPlan === 1 ? `${style.btn_active}` : `${style.btn}`
                }
                onClick={() => {
                  setActivePlan(1);
                }}
              >
                Зона с участками 1
              </button>
              <button
                className={
                  activPlan === 2 ? `${style.btn_active}` : `${style.btn}`
                }
                onClick={() => {
                  setActivePlan(2);
                }}
              >
                Зона с участками 2
              </button>
            </div>
            <div className={style.status_btns}>
              <div>
                {" "}
                <span className={style.span_free}></span> - Свободен
              </div>
              <div>
                {" "}
                <span className={style.span_booked}></span>- Забронирован
              </div>
              <div>
                {" "}
                <span className={style.span_sold}></span>- Продано
              </div>
            </div>
          </div>

          {/* mobile container */}

          <div className={style.active_btns_mob}>
            <button
              className={
                activPlan === 0 ? `${style.btn_active}` : `${style.btn}`
              }
              onClick={() => {
                setActivePlan(0);
              }}
            >
              Генплан
            </button>
            <button
              className={
                activPlan === 1 ? `${style.btn_active}` : `${style.btn}`
              }
              onClick={() => {
                setActivePlan(1);
              }}
            >
              Зона с участками 1
            </button>
            <button
              className={
                activPlan === 2 ? `${style.btn_active}` : `${style.btn}`
              }
              onClick={() => {
                setActivePlan(2);
              }}
            >
              Зона с участками 2
            </button>
          </div>
          <div className={style.status_btns_mob}>
            <div>
              {" "}
              <span className={style.span_free_mob}></span> - Свободен
            </div>
            <div>
              {" "}
              <span className={style.span_booked_mob}></span>- Забронирован
            </div>
            <div>
              {" "}
              <span className={style.span_sold_mob}></span>- Продано
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* filter area */}
      <Wrapper>
        <div className={style.filter_container}>
          <div className={style.filter_btns}>
            <div className={style.btn_container}>
              <label
                className={style.label}
                htmlFor="price"
                className={style.title}
              >
                Стоимость участка:
              </label>
              <select onChange={(e) => sortByPrice(e.target.value)} id="price">
                <option value="all">Все {data.length}</option>
                <option value="max">max</option>
                <option value="min">min</option>
              </select>
              <div className={style.btn_down}>
                <img src="/filter_down.svg" alt="" />
              </div>
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
              <div className={style.btn_down}>
                <img src="/filter_down.svg" alt="" />
              </div>
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
          <div className={`${style.render_lands} render_lands`}>
            {data
              .map((item) => {
                item.occupied = process.env.RESESERVED.split(",").some(
                  (id) => id === item.id
                );
                item.price = Math.trunc(
                  item.sizeSot * Number(process.env.PRICE)
                );
                item.soldout = process.env.SOLDOUT.split(",").some(
                  (id) => id === item.id
                );
                return <SinglLand key={item.id} {...item} />;
              })
              .slice(0, end)}
          </div>
          <div className={style.btn_center}>
            <button
              className={style.btn}
              onClick={() => {
                const element = document.querySelector(".render_lands");
                const scrollToBottomValue = element.scrollHeight;
                setTimeout(() => {
                  element.scrollTo({
                    top: scrollToBottomValue,
                    behavior: "smooth",
                  });
                }, 100);

                console.log(element);
                setEnd(end + 4);
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
