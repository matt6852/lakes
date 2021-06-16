import style from "styles/AirGal.module.scss";

export default function AirphotoCarousel() {
  const handleVideo = () => {
    const video = document.querySelector(".AirGal_video__1MS5a");
    const btn = document.querySelector(".AirGal_show__Sb71i");
    const btn1 = document.querySelector(".AirGal_btn_img__Khf1d");
    if (video.paused) {
      video.play();
      btn.style.display = "none";
      btn1.style.display = "none";
      video.controls = "controls";
    } else {
      video.pause();
      btn.style.display = "block";
      btn1.style.display = "block";
      video.controls = "";
    }
  };
  return (
    <div className={style.airPhoto}>
      <div className={style.video_container}>
        <video
          onClick={handleVideo}
          className={style.video}
          src="/video.mp4"
          // poster="/video_bg.png"
          // /playVideo.png
        ></video>
        <div onClick={handleVideo} className={style.btns}>
          <div>
            {" "}
            <img className={`${style.show}`} src="/video_bg.png" alt="" />
            <img className ={style.btn_img}  src="/playVideo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
