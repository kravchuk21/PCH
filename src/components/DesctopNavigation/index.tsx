import React from 'react';
import styles from "./DesctopNavigation.module.css";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/img/logo.png";
import clsx from "classnames";
import CartIcon from "../CartIcon";


type NavigationType = {
    mode?: "white" | "dark"
}

const Navigation: React.FC<NavigationType> = ({mode = "dark"}) => {
    return (
        <nav className={clsx(styles.mainMenu, {[styles.whiteMode]: mode === "white"})}>
            <div className={styles.content}>
                <Link to={"/"}>
                    <img width={50} src={LogoImg} alt="ПЧШ"/>
                </Link>
                <div className={styles.menuList}>
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
                <CartIcon/>
            </div>
        </nav>
    );
};

export default Navigation;
