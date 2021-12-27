import React from 'react';
import styles from "./Vacancy.module.css"
import PersonImg from "../../assets/img/person.png"
import Button from "../../components/Button";
import {Link} from 'react-router-dom';

type VacancyType = {}


const Vacancy: React.FC<VacancyType> = () => {
    return (
        <div className={styles.vacancy}>
            <div className={styles.vacancyHeader}>
                <div className={styles.vacancyHeaderButtons}>
                    <Link to="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 11H7.14L10.77 6.64C10.9397 6.43578 11.0214 6.1725 10.997 5.90808C10.9726 5.64365 10.8442 5.39974 10.64 5.23C10.4358 5.06026 10.1725 4.9786 9.90808 5.00298C9.64365 5.02736 9.39974 5.15578 9.23 5.36L4.23 11.36C4.19636 11.4077 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2453 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5421 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57485 18.9059C9.70793 18.9681 9.85309 19.0002 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.583 10.8863 18.4666C10.9477 18.3503 10.9855 18.2229 10.9975 18.092C11.0096 17.961 10.9957 17.8289 10.9567 17.7033C10.9176 17.5777 10.8542 17.4611 10.77 17.36L7.14 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                                fill="white"/>
                        </svg>
                    </Link>
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
                    без вредных привычек с опытом работы или без, а также с пониманием специфики работы повара. Ждем вас
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
