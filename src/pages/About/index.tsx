import React from 'react';
import styles from "./About.module.css"
import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";
import LocationImg from "../../assets/img/location.png"
import {Link} from 'react-router-dom';


const Cart: React.FC = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutHeader}>
                <ButtonBack text="О нас"/>
            </div>
            <div className={styles.info}>
                <div className={styles.infoBlock}>
                    <h2 className={styles.title}>График работы</h2>
                    <div className={styles.content}>
                        <div className={styles.workPlan}>
                            <span>дней</span>
                            <p>7</p>
                        </div>
                        <div className={styles.text}>
                            Команда ПЧШ работает 7 дней в неделю с 10:00 до 22:00, чтобы
                            каждый из вас смог в любое
                            время попробавать нашу вкуснейшую еду
                        </div>
                    </div>
                    <h2 className={styles.title}>График работы</h2>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            Команда ПЧШ работает 7 дней в неделю с 10:00 до 22:00, чтобы
                            каждый из вас смог в любое
                            время попробавать нашу вкуснейшую еду
                        </div>
                        <div>
                            <img src={LocationImg} alt="location"/>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/support"}>
                <Button text="Написать в поддержку"/>
            </Link>
        </div>
    );
};

export default Cart;
