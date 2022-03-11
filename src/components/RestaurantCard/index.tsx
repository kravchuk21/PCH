import React from 'react';
import styles from "./RestaurantCard.module.css";
import {Link} from "react-router-dom";

type RestaurantCardType = {
        title: string,
        text: string,
        img: string
}

const RestaurantCard: React.FC<RestaurantCardType> = ({title, text, img}) => {
        return (
                <div className={styles.cartItem}>
                        <div className={styles.restaurantImage}>
                                <img
                                        src={img}
                                        alt={title}/>
                                <Link to={"/vacancies"} className={styles.restaurantButton}>
                                        Вакансии
                                </Link>
                        </div>
                        <div className={styles.restaurantInfo}>
                                <h3 className={styles.restaurantTitle}>{title}</h3>
                                <p className={styles.restaurantInfoText}>{text}</p>
                        </div>
                </div>
        );
};

export default RestaurantCard;
