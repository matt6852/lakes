import style from "styles/SuperBtn.module.scss";
import { useAppContext } from "context/state";
import React, { useEffect } from "react";

export default function SuperButton() {
    const { scrollBtn, setScrollBtn } = useAppContext();
    useEffect(() => {
      const event = window.addEventListener("scroll", () => {
        if (window.scrollY >= 6800) {
          setScrollBtn(true);
        } else {
          setScrollBtn(false);
        }
      });
      return () => {
        window.removeEventListener("scroll", event);
      };
    }, []);
  return (
    <div className={scrollBtn ? `${style.hidden}` : `${style.super_btn}`}>
      <img src="/secret_button.png" alt="secret_btn" />
    </div>
  );
}
