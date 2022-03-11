import React from "react";
import styles from "./SlideItem.module.css";
import {Link} from "react-router-dom";

type SlideType = {
    id: string
    img: string
    title: string
    price: number
    description: string
}

const Slide: React.FC<SlideType> = ({id, img, price, title, description}) => {
    return (
        <Link to={`/product/${id}`}>
            <div className={styles.slide}>
                <div className={styles.slideImg}>
                    <img width="80%" src={img} alt={title}/>
                </div>
                <div className={styles.slideInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.price}>{price}р.</h3>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>

    )
}

export default Slide
