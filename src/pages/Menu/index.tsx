import React from 'react';
import styles from "./Menu.module.css"
import clsx from "classnames"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//components
import MenuProductCardLoader from "../../components/loaders/MenuProductCardLoader";
import MenuItemCard from "../../components/MenuItemCard";
import CategoryLoader from "../../components/loaders/CategoryLoader";
import ButtonBack from "../../components/ButtonBack";
import Error from "../../components/Error";
import CartIcon from '../../components/CartIcon';
//redux
import {RootState} from "../../redux/store";
import {LoadingState} from '../../redux/Types';
import {fetchCategoryItems, setActiveCategory} from '../../redux/slices/categorySlice';
import {fetchProductItems} from "../../redux/slices/productsSlice";

const Menu: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.items)
    const dispatch = useDispatch()
    const productsLoadingState = useSelector((state: RootState) => state.products.loadingState)
    const category = useSelector((state: RootState) => state.category.items)
    const activeCategory = useSelector((state: RootState) => state.category.activeCategory)
    const categoryLoadingState = useSelector((state: RootState) => state.category.loadingState)

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
               <CartIcon/>
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
