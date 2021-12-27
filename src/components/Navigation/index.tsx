import React from 'react';
import styles from "./Navigation.module.css";
import {Link} from "react-router-dom";

type NavigationType = {
    onClickOpenMenu: () => void
}

const Navigation:React.FC<NavigationType> = ({onClickOpenMenu}) => {
    return (
        <nav className={styles.mainMenu}>
            <div className={styles.menuList}>
                <div className={styles.menuButton} onClick={onClickOpenMenu}>
                    <svg width="24" height="24" viewBox="0 0 16 12" fill="#323232"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5H12V7H0V5ZM0 0H16V2H0V0ZM0 12H7.235V10H0V12Z" fill="#323232"/>
                    </svg>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/menu"}>
                        Меню
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/cart"}>
                        Корзина
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/vacancies"}>
                        Вакансии
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/restaurants"}>
                        Рестораны
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/about"}>
                        О нас
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/support"}>
                        Поддержка
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link to={"/auth"}>
                        Войти
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
