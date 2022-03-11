import React from 'react';
import styles from "./NotFoundPage.module.css"
import NotFoundImg from "../../assets/img/404.png"

const NotFoundPage: React.FC = () => {
        return (
                <div className={styles.notFound}>
                        <div className={styles.content}>
                                <h2 className={styles.title}>Error...</h2>
                                <div className={styles.image}>
                                        <span>4</span>
                                        <img src={NotFoundImg} alt="404"/>
                                        <span>4</span>
                                </div>
                                <p className={styles.text}>
                                        Что - то пошло не так, попробуйте зайти чуть позже
                                </p>
                        </div>
                </div>
        );
};

export default NotFoundPage;
