import React from 'react';
import ErrorImg from "../../assets/img/404.png"
import styles from "./Error.module.css"

const Error = () => {
    return (
        <div className={styles.error}>
            <img className={styles.image} src={ErrorImg} alt="error"/>
            <p className={styles.text}>Что - то пошло не так, попробуйте зайти чуть позже</p>
        </div>
    );
};

export default Error;
