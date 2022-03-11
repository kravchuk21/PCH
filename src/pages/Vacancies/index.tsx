import React from 'react';
import {isDesktop, isMobile} from "react-device-detect";
import {Link} from "react-router-dom";
import styles from "./Vacancies.module.css"
//components
import ButtonBack from "../../components/ButtonBack";
import DesctopNavigation from "../../components/DesctopNavigation";
//assets
import CirclesImg from "../../assets/img/svg/circles.svg";
import PersonImg from "../../assets/img/person.png";
import Person2Img from "../../assets/img/peros 2.png";


const Vacancies: React.FC = () => {
    return (
        <div className={styles.vacancies}>
            {isDesktop && (
                <DesctopNavigation mode={"white"}/>
            )}
            {isMobile && (
                <div className={styles.vacanciesHeader}>
                    <ButtonBack text="Вакансии"/>
                </div>
            )}
            <div className={styles.vacanciesItems}>
                <div className={styles.cartItem}>
                    <div className={styles.vacanciesImage}>
                        <img width={162} className={styles.circles} src={CirclesImg} alt=""/>
                        <img width="80%" src={PersonImg} alt=""/>
                    </div>
                    <div className={styles.vacanciesInfo}>
                        <h3 className={styles.vacanciesTitle}>Повар</h3>
                        <p className={styles.vacanciesInfoText}>
                            Рестораны:
                            г.Толочин
                            г.Коханово
                        </p>
                        <Link to={"/vacancies/1"} className={styles.vacanciesButton}>
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div className={styles.cartItem}>
                    <div className={styles.vacanciesImage}>
                        <img width={162} className={styles.circles} src={CirclesImg} alt=""/>
                        <img width="80%" src={Person2Img} alt=""/>
                    </div>
                    <div className={styles.vacanciesInfo}>
                        <h3 className={styles.vacanciesTitle}>Повар</h3>
                        <p className={styles.vacanciesInfoText}>
                            Рестораны:
                            г.Толочин
                            г.Коханово
                        </p>
                        <Link to={"/vacancies/1"} className={styles.vacanciesButton}>
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Vacancies;
