
import style from "styles/AirGal.module.scss";
export default function AirphotoCarousel() {
    return (
      <div className={style.airPhoto}>
        <div className ={style.video_container}>
          <video src="/air.mp4" alt="" poster ="/video_bg.png" className= {style.video} />
          <div className ={style.video_controls}>
            <div className ={style.video_controls_bar}>
              <div className ={style.video_controls_line}></div>
            </div>
            <div className= {style.btns}>
              <button id ="play-pause">aa</button>
            </div>
          </div>
        </div>
      </div>
    );
}
