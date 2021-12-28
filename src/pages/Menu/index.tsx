import React from 'react';
import styles from "./Menu.module.css"
import ButtonBack from "../../components/ButtonBack";
import clsx from "classnames"
import {Link} from "react-router-dom";
import MenuProductCardLoader from "../../components/loaders/MenuProductCardLoader";
import MenuItemCard from "../../components/MenuItemCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {LoadingState} from '../../redux/Types';
import {fetchCategoryItems, setActiveCategory} from '../../redux/slices/categorySlice';
import {fetchProductItems} from "../../redux/slices/productsSlice";
import CategoryLoader from "../../components/loaders/CategoryLoader";
import Error from "../../components/Error";

const Menu: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.items)
    const productsLoadingState = useSelector((state: RootState) => state.products.loadingState)
    const category = useSelector((state: RootState) => state.category.items)
    const activeCategory = useSelector((state: RootState) => state.category.activeCategory)
    const categoryLoadingState = useSelector((state: RootState) => state.category.loadingState)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchProductItems(activeCategory))
        if (category.length <= 1) {
            dispatch(fetchCategoryItems())
        }
    }, [dispatch, activeCategory, category.length])

    return (
        <div className={styles.menu}>
            <div className={styles.menuHeader}>
                <ButtonBack text="Меню"/>
                <Link to="/cart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 7H18.79C19.0694 7.00001 19.3457 7.05857 19.6011 7.17191C19.8565 7.28524 20.0854 7.45083 20.2729 7.65801C20.4603 7.86519 20.6023 8.10936 20.6897 8.37478C20.777 8.64019 20.8078 8.92097 20.78 9.199L20.18 15.199C20.1307 15.6925 19.8997 16.1501 19.532 16.4829C19.1642 16.8157 18.686 17 18.19 17H8.64C8.17747 17.0002 7.72918 16.84 7.37144 16.5469C7.01371 16.2537 6.76866 15.8456 6.678 15.392L5 7Z"
                            stroke="#000" strokeWidth="2" strokeLinejoin="round"/>
                        <path
                            d="M5 7L4.19 3.757C4.13583 3.54075 4.01095 3.34881 3.83521 3.21166C3.65946 3.0745 3.44293 3.00001 3.22 3H2"
                            stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 21H10" stroke="#000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M16 21H18" stroke="#000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
            <div className={styles.category}>
                {(categoryLoadingState === LoadingState.Error || categoryLoadingState === LoadingState.Never) && null}
                {categoryLoadingState === LoadingState.Loading && Array(5).fill(0).map(_ => <div
                    key={`${new Date()}${Math.random()}`}
                    className={styles.categoryLoader}>
                    <CategoryLoader key={`${new Date()}${Math.random()}`}/>
                </div>)}
                {categoryLoadingState === LoadingState.Loaded && (
                    category.map(c => (
                        <div onClick={() => dispatch(setActiveCategory(c.id))}
                             key={`${c.id}${c.title}`}
                             className={clsx(styles.categoryItem, {[styles.active]: c.id === activeCategory})}>
                            {c.title}
                        </div>
                    ))
                )}
            </div>
            {productsLoadingState === LoadingState.Error && <Error/>}
            {productsLoadingState !== LoadingState.Error && productsLoadingState !== LoadingState.Never && (
                <div className={styles.productCards}>
                    {productsLoadingState === LoadingState.Loading && (
                        Array(10).fill(0).map(_ => <div key={`${new Date()}${Math.random()}`}
                                                        className={styles.productLoader}><MenuProductCardLoader/></div>)
                    )}
                    {productsLoadingState === LoadingState.Loaded && (
                        products.map(product => (
                            <MenuItemCard key={product.title + product.id}
                                          id={product.id}
                                          title={product.title}
                                          picture={product.picture}/>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Menu;
