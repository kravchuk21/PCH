import React from 'react';
import styles from "./Cart.module.css"
import Button from "../../components/Button";
import CartItemCard from '../../components/CartItemCard';
import ButtonBack from "../../components/ButtonBack";
import {isDesktop} from "react-device-detect";
import DesctopNavigation from "../../components/DesctopNavigation";
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';


const Cart: React.FC = () => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const items = useSelector((state: RootState) => state.cart.items)

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
                        items.map((item, index) => (
                            <div key={index}>
                                <CartItemCard key={index + item.title} totalPrice={item.totalPrice}
                                              totalCount={item.count} title={item.title} picture={item.picture}
                                              size={item.sizes.title} select={item.select?.title} check={item.radio?.title}/>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.cartInfo}>
                    <h3 className={styles.totalPrice}>Итого : <span>{totalPrice} р.</span></h3>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.infoTitle}>Информация</h2>
                    <p className={styles.infoText}>Оплата осуществляется при получении.
                        Просим перепроверить адрес доставки</p>
                </div>
                <Button disabled={items.length === 0} text="Заказать"/>
            </div>

        </div>

    );
};

export default Cart;
