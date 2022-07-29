import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../../styles/intro/titleName.module.scss';

export default function TitleName() {
    return (
        <Fragment>
            <header className={styles.header}>
            <div className={styles.title}>
                <div className={styles.front}><h2>Ahmed Abou Khatwa</h2></div>
                <div className={styles.back}><h2>front-end developer</h2></div>
            </div>
            <div className={styles.control}>
          <svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            class="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        </header>      
        </Fragment>        
    )
}