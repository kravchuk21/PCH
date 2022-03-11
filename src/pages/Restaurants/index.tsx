import React from 'react';
import styles from "./Restaurants.module.css"
//components
import ButtonBack from "../../components/ButtonBack";
import RestaurantCard from "../../components/RestaurantCard";
//assets
import FreeImg from "../../assets/img/free.png";

const Restaurants: React.FC = () => {
    return (
        <div className={styles.restaurants}>
            <div className={styles.restaurantsHeader}>
                <ButtonBack text="Рестораны"/>
            </div>
            <div className={styles.restaurantsItems}>
                <RestaurantCard
                    title={"г.Коханово"}
                    text={"Наш недавно открытый ресторан находится в г.Коханово по улице Микрорайон 19. Время работы:Вс, Пн, Вт, Ср, Чт - с 10 до 21 Пт, Сб, - с 10 до 22 Ждем вас !"}
                    img={FreeImg}
                />
                <RestaurantCard
                    title={"г.Коханово"}
                    text={"Наш недавно открытый ресторан находится в г.Коханово по улице Микрорайон 19. Время работы:Вс, Пн, Вт, Ср, Чт - с 10 до 21 Пт, Сб, - с 10 до 22 Ждем вас !"}
                    img={FreeImg}
                />
            </div>
        </div>

    );
};

export default Restaurants;
