/**
 * 整行字号比正文小
 */
import React from "react";
import styles from "./de.module.css"

function De({children}) {
    return <div className={styles.de}>{children}</div>
}

export default De;