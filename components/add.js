/**
 * 加虚线下边框，通常是翻译者自己加上的文字
 */
import React from "react";
import styles from "./add.module.css"

function Add({children}) {
    return <span className={styles.add}>{children}</span>
}

export default Add;