import React from 'react';
import styles from "./CartItemCard.module.css"
import CirclesImg from "../../assets/img/svg/circles.svg";
import FreeImg from "../../assets/img/free.png";


const CartItem: React.FC = () => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.productImage}>
                <img width={162} className={styles.circles} src={CirclesImg} alt="circles"/>
                <img width="80%" src={FreeImg} alt="Шаурма"/>
            </div>
            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>Шаурма</h3>
                <p className={styles.productInfoText}>Размер : M</p>
                <p className={styles.productInfoText}>Количество :</p>
                <div className={styles.productCount}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <h4 className={styles.productPrice}>Цена : 12 р.</h4>
            </div>
        </div>
    );
};

export default CartItem;
