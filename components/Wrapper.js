import { Children } from "react";
import style from "styles/Wrapper.module.scss"

export default function Wrapper({children}) {
    return <div className={`${style.wrapper} z_index_1`}>{children}</div>;
}
