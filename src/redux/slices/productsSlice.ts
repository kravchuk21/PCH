import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {LoadingState, Product} from "../Types";
import {productsAPI} from "../../api/products.api";

export interface ProductsState {
    items: Array<Product>,
    loadingState: LoadingState
}

const initialState: ProductsState = {
    items: [],
    loadingState: LoadingState.Loading
}

export const fetchProductItems = createAsyncThunk(
    'fetchProductItems',
    async (activeCategory: number) => {
        if (activeCategory === 0) {
            return await productsAPI.getItems()
        } else {
            return await productsAPI.getItemByCategory(activeCategory)
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductItems.pending, state => {
                state.loadingState = LoadingState.Loading
            })
            .addCase(fetchProductItems.fulfilled, (state, action) => {
                state.items = action.payload
                state.loadingState = LoadingState.Loaded
            })
            .addCase(fetchProductItems.rejected, (state) => {
                state.loadingState = LoadingState.Error
            })
    }
})


export default productsSlice.reducer
