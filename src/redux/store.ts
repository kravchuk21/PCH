import {configureStore} from '@reduxjs/toolkit'
import productsSlice from "./slices/productsSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import popularProductsSlice from "./slices/popularProductsSlice";
import appSlice from "./slices/appSlice";
import userSlice from './slices/userSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        popular: popularProductsSlice,
        category: categorySlice,
        product: productSlice,
        user: userSlice,
        app: appSlice,
        cart: cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch