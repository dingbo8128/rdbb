/**
 * 右对齐，比如“细拉”
 */
import React from "react";
import styles from "./qs.module.css"

function Qs({children}) {
    return <div className={styles.qs}>{children}</div>
}

export default Qs;