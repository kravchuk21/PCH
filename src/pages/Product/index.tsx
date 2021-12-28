import React from 'react';
import styles from "./Product.module.css"
import Button from "../../components/Button";
import {Link} from 'react-router-dom';
import SelectPopup from '../../components/SelectPopup';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductData} from "../../redux/slices/productSlice";
import {Check, LoadingState, ProductToCart, Select} from '../../redux/Types';
import {useParams} from "react-router";
import Error from "../../components/Error";
import {SizeType} from '../../api/types';
import clsx from 'classnames';
import CheckSelect from "../../components/CheckSelect";
import Loader from "../../components/loaders/Loader";
import CartIcon from "../../components/CartIcon";
import {addItem} from '../../redux/slices/cartSlice';

const ProductPage: React.FC = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state: RootState) => state.product.data)
    const productLoadingState = useSelector((state: RootState) => state.product.loadingState)
    const params = useParams()

    const [activeSelectItem, setActiveSelectItem] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const [activeCheckItem, setActiveCheckItem] = React.useState(0)

    React.useEffect(() => {
        if (params.id) {
            dispatch(fetchProductData(params.id))
        }
    }, [dispatch, params])


    const onSelectType = (id: number): void => {
        setActiveSelectItem(id)
    }


    const onCheckType = (id: number): void => {
        setActiveCheckItem(id)
    }

    const onAddProduct = (): void => {
        if (productData) {
            const result: ProductToCart = {
                id: productData.id,
                title: productData.title,
                picture: productData.picture,
                sizes: productData.sizes[activeSize],
                radio: productData.radio ? productData.radio[0].item[activeCheckItem] : null,
                select: productData.select ? productData.select[0].item[activeSelectItem] : null,
                price: (productData.sizes[activeSize].price) +
                    (productData.radio ? productData.radio[0].item[activeCheckItem].price : 0) +
                    (productData.select ? productData.select[0].item[activeSelectItem].price : 0)

            }
            dispatch(addItem(result))
        }
    }

    return (
        <div className={styles.product}>
            {(productLoadingState === LoadingState.Loading || productLoadingState === LoadingState.Never) && <Loader/>}
            {productData === null && <div className={styles.error}><Error/></div>}
            {productData !== null && productLoadingState === LoadingState.Loaded && (
                <div>
                    <div className={styles.productHeader}>
                        <div className={styles.productHeaderButtons}>
                            <Link to="/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 11H7.14L10.77 6.64C10.9397 6.43578 11.0214 6.1725 10.997 5.90808C10.9726 5.64365 10.8442 5.39974 10.64 5.23C10.4358 5.06026 10.1725 4.9786 9.90808 5.00298C9.64365 5.02736 9.39974 5.15578 9.23 5.36L4.23 11.36C4.19636 11.4077 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2453 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5421 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57485 18.9059C9.70793 18.9681 9.85309 19.0002 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.583 10.8863 18.4666C10.9477 18.3503 10.9855 18.2229 10.9975 18.092C11.0096 17.961 10.9957 17.8289 10.9567 17.7033C10.9176 17.5777 10.8542 17.4611 10.77 17.36L7.14 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                                        fill="white"/>
                                </svg>
                            </Link>
                            <CartIcon/>
                        </div>
                        <div className={styles.productImage}>
                            <img style={{maxWidth: 360, width: "100%"}}
                                 src={productData.picture} alt={productData.title}/>
                        </div>
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productTitle}>
                            <h2 className={styles.productName}>{productData.title}</h2>
                            <span className={styles.productPrice}>12 р.</span>
                        </div>
                        <div className={styles.selectSize}>
                            {productData.sizes && productData.sizes.map((size: SizeType, idx: number) => (
                                <div key={size.title + idx}
                                     onClick={() => setActiveSize(idx)}
                                     className={clsx(styles.sizeButton, {[styles.active]: idx === activeSize})}>{size.title}</div>
                            ))}
                        </div>
                        {
                            productData.radio && productData.radio.map((check: Check, index) => (
                                <CheckSelect key={check.title + index}
                                             checkTitle={check.title}
                                             items={check.item}
                                             activeCheckItem={check.item[activeCheckItem]}
                                             onClickCheckType={onCheckType}/>
                            ))
                        }
                        {
                            productData.select && productData.select.map((select: Select, index) => (
                                <SelectPopup
                                    key={select.title + index}
                                    selectTitle={select.title}
                                    items={select.item}
                                    activeSelectItem={select.item[activeSelectItem]}
                                    onClickSelectType={onSelectType}
                                />
                            ))
                        }
                        <div className={styles.description}>
                            <h2 className={styles.descriptionTitle}>Описание</h2>
                            <p className={styles.descriptionText}>{productData.description}</p>
                        </div>
                        <div onClick={onAddProduct}>
                            <Button text={`Добавить`}/>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductPage;
