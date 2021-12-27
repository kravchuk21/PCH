import React from 'react';
import styles from "./MenuItemCard.module.css";
import CirclesImg from "../../assets/img/svg/circles.svg";
import {Link} from "react-router-dom";
import clsx from "classnames";


type MenuItemType = {
    id: string
    title: string
    count: number
    addProduct: (id: string) => void
    picture: string
}

const MenuItem: React.FC<MenuItemType> = ({id, title, count= 0,picture, addProduct}) => {
    return (
        <div className={styles.productCard}>
            <h4 className={styles.productTitle}>{title}</h4>
            <div className={styles.productButtons}>
                <Link className={styles.productButton} to={`/product/${id}`}>Больше</Link>
                {count === 0 &&  <div onClick={() => addProduct(id)} className={styles.productButton}>+</div>}
                {count !== 0 &&  <div onClick={() => addProduct(id)} className={clsx(styles.productButton, styles.active)}>{count}</div>}
            </div>
            <img className={styles.productImg} src={picture} alt={title}/>
            <img width={160} className={styles.circles} src={CirclesImg} alt="circles"/>
        </div>
    );
};

export default MenuItem;
