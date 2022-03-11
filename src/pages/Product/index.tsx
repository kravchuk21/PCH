import React from 'react';
import styles from "./Product.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import clsx from 'classnames';
//components
import Button from "../../components/Button";
import SelectPopup from '../../components/SelectPopup';
import Error from "../../components/Error";
import CheckSelect from "../../components/CheckSelect";
import Loader from "../../components/loaders/Loader";
import CartIcon from "../../components/CartIcon";
import ButtonBack from '../../components/ButtonBack';
//redux
import {RootState} from '../../redux/store';
import {addItem} from '../../redux/slices/cartSlice';
import {fetchProductData} from "../../redux/slices/productSlice";
import {Check, LoadingState, ProductToCart, Select} from '../../redux/Types';
//api
import {SizeType} from '../../api/types';
import {isMobile, isDesktop} from 'react-device-detect';
import DesctopNavigation from '../../components/DesctopNavigation';
import AddictionSelect from '../../components/AddictionSelect';

const ProductPage: React.FC = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const productData = useSelector((state: RootState) => state.product.data)
    const productLoadingState = useSelector((state: RootState) => state.product.loadingState)

    const [activeSelectItem, setActiveSelectItem] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const [activeCheckItem, setActiveCheckItem] = React.useState(0)
    const [activeAddictionItems, setActiveAddictionItems] = React.useState<Array<string>>([])

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

    const onClickAddictionType = (title: string) => {
        const item = activeAddictionItems.find(item => item === title)
        if (!item) {
            return setActiveAddictionItems([...activeAddictionItems, title])
        } else {
            return setActiveAddictionItems([...activeAddictionItems.filter(item => item !== title)])
        }
    }
    const onAddProduct = (): void => {
        if (productData) {
            const result: ProductToCart = {
                id: productData.id,
                title: productData.title,
                picture: productData.picture,
                sizes: productData.sizes[activeSize].title,
                radio: productData.radio ? productData.radio[0].item[activeCheckItem].title : null,
                select: productData.select ? productData.select[0].item[activeSelectItem].title : null,
                addiction: productData.addiction ? activeAddictionItems : null,
                price: (productData.sizes[activeSize].price) +
                    (productData.radio ? productData.radio[0].item[activeCheckItem].price : 0) +
                    (productData.addiction ? (productData.addiction.filter(item => activeAddictionItems.find(i => i === item.title)).reduce((a, b) => {
                        return a + b.price
                    }, 0)) : 0) +
                    (productData.select ? productData.select[0].item[activeSelectItem].price : 0)
            }
            dispatch(addItem(result))
        }
    }

    return (
        <div className={styles.product}>
            {(productLoadingState === LoadingState.Loading || productLoadingState === LoadingState.Never) &&
            <Loader/>}
            {productData === null && <div className={styles.error}><Error/></div>}
            {productData !== null && productLoadingState === LoadingState.Loaded && (
                <div>
                    <div className={clsx(styles.productHeader, {[styles.productHeaderDesctop]: isDesktop})}>
                        {isMobile && <div className={styles.productHeaderButtons}>
                            <ButtonBack mode={"white"}/>
                            <CartIcon/>
                        </div>}
                        {isDesktop && <DesctopNavigation mode={"white"}/>}
                        <div className={clsx({[styles.desctopCardProduct]: isDesktop})}>
                            {isDesktop && (
                                <div className={styles.desctopInfo}>
                                    <div className={styles.productTitle}>
                                        <h2 className={styles.productName}>{productData.title}</h2>
                                    </div>
                                    <span className={styles.productPrice}>Цена: {
                                        (productData.sizes[activeSize].price) +
                                        (productData.radio ? productData.radio[0].item[activeCheckItem].price : 0) +
                                        (productData.addiction ? (productData.addiction.filter(item => activeAddictionItems.find(i => i === item.title)).reduce((a, b) => {
                                            return a + b.price
                                        }, 0)) : 0) +
                                        (productData.select ? productData.select[0].item[activeSelectItem].price : 0)}
                                        р.</span>
                                    <div className={styles.description}>
                                        <h2 className={styles.descriptionTitle}>Описание</h2>
                                        <p className={styles.descriptionText}>{productData.description}</p>
                                    </div>
                                </div>
                            )}
                            <div className={clsx(styles.productImage, {[styles.productImageDesctop]: isDesktop})}>
                                <img style={{maxWidth: 360, width: "100%"}}
                                     src={productData.picture} alt={productData.title}/>
                            </div>
                            {
                                isDesktop && (
                                    <div className={clsx(styles.selectSize, styles.desctopSelectSize)}>
                                        {productData.sizes && productData.sizes.map((size: SizeType, idx: number) => (
                                            <div key={size.title + idx}
                                                 onClick={() => setActiveSize(idx)}
                                                 className={clsx(styles.sizeButton, {[styles.active]: idx === activeSize})}>{size.title}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={clsx(styles.productInfo, {[styles.productInfoDesctop]: isDesktop})}>
                        {isMobile && (
                            <div className={styles.productTitle}>
                                <h2 className={styles.productName}>{productData.title}</h2>
                                <span className={styles.productPrice}>{
                                    (productData.sizes[activeSize].price) +
                                    (productData.radio ? productData.radio[0].item[activeCheckItem].price : 0) +
                                    (productData.addiction ? (productData.addiction.filter(item => activeAddictionItems.find(i => i === item.title)).reduce((a, b) => {
                                        return a + b.price
                                    }, 0)) : 0) +
                                    (productData.select ? productData.select[0].item[activeSelectItem].price : 0)}
                                    р.</span>
                            </div>
                        )}
                        {isMobile && (
                            <div className={styles.selectSize}>
                                {productData.sizes && productData.sizes.map((size: SizeType, idx: number) => (
                                    <div key={size.title + idx}
                                         onClick={() => setActiveSize(idx)}
                                         className={clsx(styles.sizeButton, {[styles.active]: idx === activeSize})}>{size.title}
                                    </div>
                                ))}
                            </div>
                        )}
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
                                <SelectPopup key={select.title + index}
                                             selectTitle={select.title}
                                             items={select.item}
                                             activeSelectItem={select.item[activeSelectItem]}
                                             onClickSelectType={onSelectType}
                                />
                            ))
                        }
                        {
                            productData.addiction && (
                                <>

                                    <AddictionSelect items={productData.addiction}
                                                     activeAddictionItem={activeAddictionItems}
                                                     onClickAddictionType={onClickAddictionType}/>
                                </>
                            )
                        }
                        {isMobile && (
                            <div className={styles.description}>
                                <h2 className={styles.descriptionTitle}>Описание</h2>
                                <p className={styles.descriptionText}>{productData.description}</p>
                            </div>
                        )}
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
