import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoadingState, Product} from "../Types";
import {productsAPI} from "../../api/products.api";

export interface ProductsState {
    items: Array<Product>,
    loadingState: LoadingState,
    activePopularItem: number,
}

const initialState: ProductsState = {
    items: [],
    loadingState: LoadingState.Loading,
    activePopularItem: 0
}

export const fetchPopularProductItems = createAsyncThunk(
    'fetchPopularProductItems',
    async (_, thunkAPI) => {
        return await productsAPI.getPopularItems()
    }
)

export const popularProductsSlice = createSlice({
    name: 'popularProducts',
    initialState,
    reducers: {
        getItems: (state) => {
            state.loadingState = LoadingState.Loading
            state.items = []
            state.loadingState = LoadingState.Loaded
        },
        setActivePopularItem: (state, action: PayloadAction<number>) => {
            if (state.activePopularItem + action.payload < 0) {
                state.activePopularItem = state.items.length - 1
            } else if (state.activePopularItem + action.payload > state.items.length - 1) {
                state.activePopularItem = 0
            } else {
                state.activePopularItem += action.payload
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPopularProductItems.pending, state => {
                state.loadingState = LoadingState.Loading
            })
            .addCase(fetchPopularProductItems.fulfilled, (state, action) => {
                state.items = action.payload
                state.loadingState = LoadingState.Loaded
            })
            .addCase(fetchPopularProductItems.rejected, (state, action) => {
                state.loadingState = LoadingState.Error
            })
    }
})

export const {
    getItems,
    setActivePopularItem
} = popularProductsSlice.actions

export default popularProductsSlice.reducer
