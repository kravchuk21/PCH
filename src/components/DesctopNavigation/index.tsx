import React from 'react';
import styles from "./DesctopNavigation.module.css";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/img/logo.png";
import clsx from "classnames";
import CartIcon from "../CartIcon";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {logout} from '../../redux/slices/userSlice';


type NavigationType = {
        mode?: "white" | "dark"
}

const Navigation: React.FC<NavigationType> = ({mode = "dark"}) => {
        const isAuth = useSelector((state: RootState) => state.user.isAuth)
        const dispatch = useDispatch()

        const onClickLogout = () => {
                dispatch(logout())
        }


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
                                                {
                                                        isAuth ? (<div onClick={onClickLogout}>
                                                                Выйти
                                                        </div>) : (<Link to={"/auth"}>
                                                                Войти
                                                        </Link>)
                                                }
                                        </div>
                                </div>
                                <CartIcon mode={mode}/>
                        </div>
                </nav>
        );
};

export default Navigation;
