/**
 * 文中的注解，字号比正文小
 */
import React from "react";
import styles from "./note.module.css"

function Nt({children}) {
    return <span className={styles.note}>（{children}）</span>
}

export default Nt;