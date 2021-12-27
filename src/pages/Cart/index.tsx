import React from 'react';
import styles from "./Cart.module.css"
import Button from "../../components/Button";
import CartItemCard from '../../components/CartItemCard';
import ButtonBack from "../../components/ButtonBack";
import {isDesktop} from "react-device-detect";
import DesctopNavigation from "../../components/DesctopNavigation";


const Cart: React.FC = () => {
    return (
        <div className={styles.cart}>
            {isDesktop && (
                <DesctopNavigation/>
            )}
            {!isDesktop && (
                <div className={styles.cartHeader}>
                    <ButtonBack text="Корзина"/>
                </div>
            )}
            <div className={styles.content}>
                {isDesktop && (
                    <h2 className={styles.title}>Корзина</h2>
                )}

                <div className={styles.cartItems}>
                    {
                        Array(12).fill(0).map((_, index) => (
                            <div key={index}>
                                <CartItemCard/>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.cartInfo}>
                    <h3 className={styles.totalPrice}>Итого : <span>12 р.</span></h3>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}>Информация</h2>
                    <p className={styles.infoText}>Оплата осуществляется при получении.
                        Просим перепроверить адрес доставки</p>
                </div>
                <Button text="Заказать"/>
            </div>

        </div>

    );
};

export default Cart;
