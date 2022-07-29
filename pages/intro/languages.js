import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/intro/languages.module.scss";

export default function Languages() {
    return (
    <Fragment>
        <ul className={styles.ul_languages_lists}>
            <h2>Languages</h2>
            <h3>Arabic</h3>
            <ul className={styles.rate}>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            </ul>
            <h3>English</h3>
            <ul className={styles.rate}>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            <li className={styles.fill}></li>
            <li className={styles.empty}></li>
            <li className={styles.empty}></li>
            </ul>
        </ul>
    </Fragment>
    );
}
