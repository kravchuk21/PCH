import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import _ from 'underscore';
import {ProductInCart, ProductToCart} from "../Types";

export interface CartState {
    items: ProductInCart[],
    totalPrice: number,
    totalCount: number
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state) => {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0
        },
        addItem: (state, action: PayloadAction<ProductToCart>) => {
            const item = state.items.find(item => _.isEqual(item, {
                ...action.payload,
                count: item.count,
                totalPrice: item.totalPrice
            }))

            if (!!item) {
                state.items = [{
                    ...action.payload,
                    totalPrice: item.totalPrice + action.payload.price,
                    count: item.count + 1
                }, ...state.items.filter(item => !_.isEqual(item, {
                    ...action.payload,
                    count: item.count,
                    totalPrice: item.totalPrice
                }))]
                state.totalPrice += action.payload.price
                state.totalCount += 1
            } else {
                state.items = [{
                    ...action.payload,
                    totalPrice: action.payload.price,
                    count: 1
                }, ...state.items]
                state.totalPrice += action.payload.price
                state.totalCount += 1
            }
        },
        addItemCount: (state, action: PayloadAction<ProductToCart>) => {
            const item = state.items.find(item => _.isEqual(item, {
                ...action.payload
            }))

            if (!!item) {
                state.items = [{
                    ...action.payload,
                    totalPrice: item.totalPrice + action.payload.price,
                    count: item.count + 1
                }, ...state.items.filter(item => !_.isEqual(item, {
                    ...action.payload,
                    count: item.count,
                    totalPrice: item.totalPrice
                }))]
                state.totalPrice += action.payload.price
                state.totalCount += 1
            }
        },
        removeItemCount: (state, action: PayloadAction<ProductToCart>) => {
            const item = state.items.find(item => _.isEqual(item, {
                ...action.payload
            }))

            if (!!item) {
                if (item.count > 1) {
                    state.items = [{
                        ...action.payload,
                        totalPrice: item.totalPrice - action.payload.price,
                        count: item.count - 1
                    }, ...state.items.filter(item => !_.isEqual(item, {
                        ...action.payload
                    }))]
                    state.totalPrice -= action.payload.price
                    state.totalCount -= 1
                } else {
                    state.items = [...state.items.filter(item => !_.isEqual(item, {
                        ...action.payload
                    }))]
                    state.totalPrice -= action.payload.price
                    state.totalCount -= 1
                }
            }
        },
    },
})

export const {
    setItems,
    addItem,
    addItemCount,
    removeItemCount
} = cartSlice.actions

export default cartSlice.reducer
