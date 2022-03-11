import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoadingState, Product} from "../Types";
import {productsAPI} from "../../api/products.api";

export interface ProductState {
        data: Product | null,
        loadingState: LoadingState
}

const initialState: ProductState = {
        data: null,
        loadingState: LoadingState.Never
}

export const fetchProductData = createAsyncThunk(
        'fetchProductData',
        async (id: string) => {
                return await productsAPI.getItemById(id)
        }
)

export const productSlice = createSlice({
        name: 'product',
        initialState,
        reducers: {},
        extraReducers: builder => {
                builder
                        .addCase(fetchProductData.pending, state => {
                                state.loadingState = LoadingState.Loading
                        })
                        .addCase(fetchProductData.fulfilled, (state, action: PayloadAction<Product[]>) => {
                                state.data = action.payload[0]
                                state.loadingState = LoadingState.Loaded
                        })
                        .addCase(fetchProductData.rejected, (state) => {
                                state.loadingState = LoadingState.Error
                        })
        }
})

export default productSlice.reducer
