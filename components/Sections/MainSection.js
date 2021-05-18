import Image from "next/image";
import style from "styles/MainSection.module.scss";

export default function MainSection() {
  return (
    <section className={style.main_section}>
      <div className={style.img_container}>
        <Image
          src="/main-title.png"
          alt="Picture of the author"
          width={650}
          height={162}
        />
      </div>
    </section>
  );
}
