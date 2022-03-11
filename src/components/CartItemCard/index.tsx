import React from 'react';
import {useDispatch} from 'react-redux';
import styles from "./CartItemCard.module.css"
//assets
import CirclesImg from "../../assets/img/svg/circles.svg";
//redux
import {ProductInCart} from '../../redux/Types';
import {addItemCount, removeItemCount} from '../../redux/slices/cartSlice';

type CartItemType = {
    data: ProductInCart
}

const CartItem: React.FC<CartItemType> = ({data}) => {
    const dispatch = useDispatch()
    const onСlickAddItem = () => {
        dispatch(addItemCount(data))
    }
    const onСlickRemoveItem = () => {
        dispatch(removeItemCount(data))
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.productImage}>
                <img width={162} className={styles.circles} src={CirclesImg} alt="circles"/>
                <img width="80%" src={data.picture} alt={data.title}/>
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{data.title}</h3>
                <p className={styles.productInfoText}>Размер: {data.sizes}</p>
                {data.radio && <p className={styles.productInfoText}>Вариант: {data.radio}</p>}
                {data.select && <p className={styles.productInfoText}>Выбрано: {data.select}</p>}
                {data.addiction &&
                <p className={styles.productInfoText}>Добавки: {data.addiction.join(", ")}</p>}

                <p className={styles.productInfoText}>Количество :</p>
                <div className={styles.productCount}>
                    <button onClick={onСlickRemoveItem}>-</button>
                    <span>{data.count}</span>
                    <button onClick={onСlickAddItem}>+</button>
                </div>
                <h4 className={styles.productPrice}>Цена : {data.totalPrice} р.</h4>
            </div>
        </div>
    );
};

export default CartItem;
