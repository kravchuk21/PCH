import React from 'react';
import {isDesktop} from "react-device-detect";
import {useSelector} from 'react-redux';
import styles from "./Cart.module.css"
//components
import ButtonBack from "../../components/ButtonBack";
import DesctopNavigation from "../../components/DesctopNavigation";
import CartItemCard from '../../components/CartItemCard';
import Button from "../../components/Button";
//redux
import {RootState} from '../../redux/store';

const Cart: React.FC = () => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const items = useSelector((state: RootState) => state.cart.items)

    const onСlickToOrder = () => {
        console.log(items)
    }

    return (
        <div className={styles.cart}>
            {isDesktop && (
                <div className={styles.cartHeader}>
                    <DesctopNavigation mode={"white"}/>
                </div>
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
                        items.map((item, index) => (
                            <div key={index}>
                                <CartItemCard key={index + item.title} data={item}/>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.cartInfo}>
                    <h3 className={styles.totalPrice}>Итого : <span>{totalPrice} р.</span></h3>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}>Информация</h2>
                    <p className={styles.infoText}>
                        Оплата осуществляется при получении.
                        Просим перепроверить адрес доставки
                    </p>
                </div>
                <div onClick={onСlickToOrder}>
                    <Button disabled={items.length === 0} text="Заказать"/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
