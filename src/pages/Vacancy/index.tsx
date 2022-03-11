import React from 'react';
import styles from "./Vacancy.module.css"
import PersonImg from "../../assets/img/person.png"
import Button from "../../components/Button";
import ButtonBack from '../../components/ButtonBack';

const Vacancy: React.FC = () => {
    return (
        <div className={styles.vacancy}>
            <div className={styles.vacancyHeader}>
                <div className={styles.vacancyHeaderButtons}>
                    <ButtonBack mode={"white"}/>
                </div>
                <div className={styles.vacancyImage}>
                    <img style={{maxWidth: 360, width: "100%"}} src={PersonImg} alt=""/>
                </div>
            </div>
            <div className={styles.vacancyInfo}>
                <h2 className={styles.vacancyTitle}>
                    Продавец
                </h2>
                <h4 className={styles.description}>
                    Что мы предлагаем ?
                </h4>
                <p className={styles.list}>
                    <span className={styles.listItem}>Официальное трудоустройство</span>⠀
                    <span className={styles.listItem}>Официальное трудоустройство</span>⠀
                    <span className={styles.listItem}>Официальное трудоустройство</span>⠀
                </p>
                <h4 className={styles.description}>
                    Что мы предлагаем ?
                </h4>
                <p className={styles.text}>
                    Обязанности повара:⠀
                    - приготовление продукции согласно меню ⠀
                    - соблюдение технологических процессов ⠀
                </p>
                <h4 className={styles.description}>
                    Кого мы ищем
                </h4>
                <p className={styles.text}>
                    Мы ищем ответственных, коммуникабельных
                    без вредных привычек с опытом работы или без, а также с пониманием специфики
                    работы повара. Ждем вас
                    ! ⠀
                </p>
                <p className={styles.text}>
                    Телефон для справок: 8029-89-7777-4
                </p>
                <a href="tel:+6494461709">
                    <Button text="Позвонить"/>
                </a>
            </div>
        </div>
    );
};

export default Vacancy;
