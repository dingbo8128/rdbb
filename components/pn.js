/**
 * 人名，地名，要加下划线
 */
import React from "react";
import styles from "./pn.module.css"

function Pn({children}) {
    return <span className={styles.pn}>{children}</span>
}

export default Pn;