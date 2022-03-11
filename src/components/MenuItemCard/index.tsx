import React from 'react';
import styles from "./MenuItemCard.module.css";
import CirclesImg from "../../assets/img/svg/circles.svg";
import {Link} from "react-router-dom";

type MenuItemType = {
        id: string
        title: string
        picture: string
}

const MenuItem: React.FC<MenuItemType> = ({id, title, picture}) => {
        return (
                <div className={styles.productCard}>
                        <h4 className={styles.productTitle}>{title}</h4>
                        <div className={styles.productButtons}>
                                <Link className={styles.productButton} to={`/product/${id}`}>Больше</Link>
                        </div>
                        <img className={styles.productImg} src={picture} alt={title}/>
                        <img width={180} className={styles.circles} src={CirclesImg} alt="circles"/>
                </div>
        );
};

export default MenuItem;
