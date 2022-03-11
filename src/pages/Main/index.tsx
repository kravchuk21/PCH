import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Main.module.css"
import clsx from "classnames"
import {isDesktop, isMobile} from "react-device-detect";
import {useDispatch, useSelector} from "react-redux";
//assets
import MainImage from "../../assets/img/mainImage.png"
import LocationImg from "../../assets/img/location.png";
import FreeImg from "../../assets/img/free.png";
import ShaurmaImg from "../../assets/img/shaurma.png";
import NextImg from "../../assets/img/arrow.png"
import TomatoImg from "../../assets/img/tomato.png"
import CucumberImg from "../../assets/img/cucumber.png"
import SalatImg from "../../assets/img/salat.png"
//components
import Slide from "../../components/SlideItem";
import DesctopNavigation from "../../components/DesctopNavigation";
import RestaurantCard from "../../components/RestaurantCard";
import MainLoader from '../../components/loaders/MainLoader';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
//redux
import {LoadingState} from "../../redux/Types";
import {RootState} from "../../redux/store";
import {fetchPopularProductItems, setActivePopularItem} from "../../redux/slices/popularProductsSlice";

const Main: React.FC = () => {
        const [menuVisible, setMenuVisible] = React.useState(false)

        const popularItems = useSelector((state: RootState) => state.popular.items)
        const popularItemsLoadingState = useSelector((state: RootState) => state.popular.loadingState)
        const popularActiveItem = useSelector((state: RootState) => state.popular.activePopularItem)

        const dispatch = useDispatch()

        React.useEffect(() => {
                if (popularItems.length === 0) {
                        dispatch(fetchPopularProductItems())
                }
        }, [dispatch, popularItems.length])

        const onClickToggleOpenMenu = () => {
                setMenuVisible(!menuVisible)
        }

        const onClickToggleActivePopularItem = (next: number) => {
                dispatch(setActivePopularItem(next))
        }

        const activeSliderItem = popularItems[popularActiveItem]

        return (
                <div className={clsx(styles.main, {[styles.noScroll]: menuVisible})}>
                        {!isDesktop && menuVisible && (
                                <Navigation onClickOpenMenu={onClickToggleOpenMenu}/>
                        )}
                        {isDesktop && (
                                <DesctopNavigation/>
                        )}
                        {isDesktop && (
                                <>
                                        <img className={clsx(styles.decorationImg, styles.decorationImg1)}
                                             src={TomatoImg} alt=""/>
                                        <img className={clsx(styles.decorationImg, styles.decorationImg2)}
                                             src={CucumberImg} alt=""/>
                                        <img className={clsx(styles.decorationImg, styles.decorationImg3)}
                                             src={SalatImg} alt=""/>
                                        <img className={clsx(styles.decorationImg, styles.decorationImg4)}
                                             src={TomatoImg} alt=""/>
                                        <img className={clsx(styles.decorationImg, styles.decorationImg5)}
                                             src={CucumberImg} alt=""/>
                                </>
                        )}
                        <div className={styles.mainHeader}>
                                {!isDesktop && (
                                        <div className={styles.mainNavigation}>
                                                <div className={styles.menuButton} onClick={onClickToggleOpenMenu}>
                                                        <svg width="24" height="24" viewBox="0 0 16 12" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 5H12V7H0V5ZM0 0H16V2H0V0ZM0 12H7.235V10H0V12Z"
                                                                      fill="white"/>
                                                        </svg>
                                                </div>
                                                <div className={styles.logo}>
                                                        <svg width="64" height="29" viewBox="0 0 62 17" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                        d="M16.736 0.199999V17H11.168V4.592H6.056V17H0.488V0.199999H16.736ZM34.622 0.199999V17H29.054V11.624C27.934 11.96 26.918 12.128 26.006 12.128C23.542 12.128 21.662 11.544 20.366 10.376C19.086 9.208 18.446 7.504 18.446 5.264V0.199999H24.014V4.64C24.014 5.664 24.238 6.424 24.686 6.92C25.134 7.4 25.814 7.64 26.726 7.64C27.67 7.64 28.446 7.512 29.054 7.256V0.199999H34.622ZM61.0376 0.199999V17H37.5896V0.199999H43.1576V12.608H46.5416V0.199999H52.1096V12.608H55.4696V0.199999H61.0376Z"
                                                                        fill="white"/>
                                                        </svg>
                                                </div>
                                                <Link to="/cart">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                        d="M5 7H18.79C19.0694 7.00001 19.3457 7.05857 19.6011 7.17191C19.8565 7.28524 20.0854 7.45083 20.2729 7.65801C20.4603 7.86519 20.6023 8.10936 20.6897 8.37478C20.777 8.64019 20.8078 8.92097 20.78 9.199L20.18 15.199C20.1307 15.6925 19.8997 16.1501 19.532 16.4829C19.1642 16.8157 18.686 17 18.19 17H8.64C8.17747 17.0002 7.72918 16.84 7.37144 16.5469C7.01371 16.2537 6.76866 15.8456 6.678 15.392L5 7Z"
                                                                        stroke="white" strokeWidth="2"
                                                                        strokeLinejoin="round"/>
                                                                <path
                                                                        d="M5 7L4.19 3.757C4.13583 3.54075 4.01095 3.34881 3.83521 3.21166C3.65946 3.0745 3.44293 3.00001 3.22 3H2"
                                                                        stroke="white" strokeWidth="2"
                                                                        strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M8 21H10" stroke="white" strokeWidth="2"
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"/>
                                                                <path d="M16 21H18" stroke="white" strokeWidth="2"
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"/>
                                                        </svg>
                                                </Link>
                                        </div>
                                )}

                                <div className={styles.mainInfo}>
                                        <div className={styles.mainInfoText}>
                                                <h2 className={styles.mainTitle}>Кафе</h2>
                                                <p className={styles.mainText}>ПЧШ - это лучшие пончики, сочные чебуреки
                                                        и вкуснейшая шаурма</p>
                                                <Link to={"/menu"} className={styles.mainButton}>Меню</Link>
                                        </div>
                                        <div className={styles.images}>
                                                {isDesktop &&
                                                <img className={clsx(styles.mainImage, styles.mainImage1)} src={FreeImg}
                                                     alt="ПЧШ"/>}
                                                <img className={clsx({[styles.mobileImage]: !isDesktop}, {[styles.mainImage]: isDesktop})}
                                                     src={MainImage} alt="ПЧШ"/>
                                                {isDesktop &&
                                                <img className={clsx(styles.mainImage, styles.mainImage3)}
                                                     src={ShaurmaImg} alt="ПЧШ"/>}
                                        </div>
                                </div>
                        </div>
                        <div className={styles.mainContent}>
                                {popularItemsLoadingState === LoadingState.Loaded && (
                                        <h2 className={styles.popular}>
                                                САМОЕ ПОПУЛЯРНОЕ
                                                <span>и вкусное в нашем меню</span>
                                        </h2>
                                )}
                                {popularItemsLoadingState === LoadingState.Loaded && isDesktop && (
                                        <div className={styles.slider}>
                                                <button className={styles.prev}
                                                        onClick={() => onClickToggleActivePopularItem(-1)}><img
                                                        src={NextImg} alt="prev"/></button>
                                                <Slide id={activeSliderItem.id} title={activeSliderItem.title}
                                                       description={activeSliderItem.description}
                                                       img={activeSliderItem.picture}
                                                       price={(activeSliderItem.sizes[0].price) +
                                                       (activeSliderItem.radio ? activeSliderItem.radio[0].item[0].price : 0) +
                                                       (activeSliderItem.select ? activeSliderItem.select[0].item[0].price : 0)}/>
                                                <button className={styles.next}
                                                        onClick={() => onClickToggleActivePopularItem(1)}><img
                                                        src={NextImg} alt="next"/></button>
                                        </div>
                                )}
                                {popularItemsLoadingState === LoadingState.Loading && isDesktop && (
                                        <div className={styles.slider}>
                                                <MainLoader/>
                                        </div>
                                )}
                                {popularItemsLoadingState === LoadingState.Loaded && isMobile && (
                                        <div className={styles.popularItems}>
                                                {popularItems.map((item, index) => <Slide id={item.id}
                                                                                          title={item.title}
                                                                                          description={item.description}
                                                                                          img={item.picture}
                                                                                          price={(item.sizes[0].price) +
                                                                                          (item.radio ? item.radio[0].item[0].price : 0) +
                                                                                          (item.select ? item.select[0].item[0].price : 0)}/>)}
                                        </div>
                                )}
                                {popularItemsLoadingState === LoadingState.Loading && isMobile && (
                                        Array(5).fill(0).map((_, index) => (
                                                <div key={index + new Date().toDateString()}
                                                     className={styles.popularItems}>
                                                        <MainLoader/>
                                                </div>
                                        ))
                                )}


                                {isDesktop && (
                                        <div>
                                                <h2 className={styles.title}>О <span>наших</span> ресоранах</h2>
                                                <div className={styles.info}>
                                                        <div className={styles.infoBlock}>
                                                                <h2 className={styles.infoTitle}>График работы</h2>
                                                                <div className={styles.content}>
                                                                        <div className={styles.workPlan}>
                                                                                <span>дней</span>
                                                                                <p>7</p>
                                                                        </div>
                                                                        <div className={styles.text}>
                                                                                Команда ПЧШ работает 7 дней в неделю с
                                                                                10:00 до 22:00, чтобы каждый из вас смог
                                                                                в любое
                                                                                время попробавать нашу вкуснейшую еду
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className={styles.infoBlock}>
                                                                <h2 className={styles.infoTitle}>Как нас найти?</h2>
                                                                <div className={styles.content}>
                                                                        <div>
                                                                                <img src={LocationImg} alt="location"/>
                                                                        </div>
                                                                        <div className={styles.text}>
                                                                                Команда ПЧШ работает 7 дней в неделю с
                                                                                10:00 до 22:00, чтобы каждый из вас смог
                                                                                в любое
                                                                                время попробавать нашу вкуснейшую еду
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <h2 className={styles.title}>Рестораны</h2>
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
                                )}
                        </div>
                        <Footer/>
                </div>
        );
};

export default Main;
