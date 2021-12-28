import React from 'react';
import styles from "./CartItemCard.module.css"
import CirclesImg from "../../assets/img/svg/circles.svg";
import {Check, SelectItem, Sizes} from '../../redux/Types';

type CartItemType = {
    title: string,
    size: Sizes["title"],
    select?: SelectItem["title"] | null,
    check?: Check["title"] | null,
    picture: string
    totalCount: number
    totalPrice: number
}

const CartItem: React.FC<CartItemType> = ({picture, size, title, totalCount, totalPrice , check, select}) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.productImage}>
                <img width={162} className={styles.circles} src={CirclesImg} alt="circles"/>
                <img width="80%" src={picture} alt={title}/>
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{title}</h3>
                <p className={styles.productInfoText}>Размер: {size}</p>
                {check && <p className={styles.productInfoText}>Вариант: {check}</p>}
                {select && <p className={styles.productInfoText}>Выбрано: {select}</p>}

                <p className={styles.productInfoText}>Количество :</p>
                <div className={styles.productCount}>
                    <button>-</button>
                    <span>{totalCount}</span>
                    <button>+</button>
                </div>
                <h4 className={styles.productPrice}>Цена : {totalPrice} р.</h4>
            </div>
        </div>
    );
};

export default CartItem;
