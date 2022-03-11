import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Category, LoadingState} from "../Types";
import {categoryAPI} from "../../api/category.api";

export interface CategoryState {
        items: Array<Category>,
        activeCategory: number,
        loadingState: LoadingState
}

const initialState: CategoryState = {
        items: [
                {
                        title: "Всё",
                        id: 0
                }
        ],
        activeCategory: 0,
        loadingState: LoadingState.Never
}

export const fetchCategoryItems = createAsyncThunk(
        'fetchCategoryItems',
        async (_, thunkAPI) => {
                return await categoryAPI.getItems()
        }
)


export const categorySlice = createSlice({
        name: 'category',
        initialState,
        reducers: {
                setActiveCategory: (state, action: PayloadAction<number>) => {
                        state.activeCategory = action.payload
                }
        },
        extraReducers: builder => {
                builder
                        .addCase(fetchCategoryItems.pending, state => {
                                state.loadingState = LoadingState.Loading
                        })
                        .addCase(fetchCategoryItems.fulfilled, (state, action) => {
                                state.items = state.items.concat(action.payload)
                                state.loadingState = LoadingState.Loaded
                        })
                        .addCase(fetchCategoryItems.rejected, (state, action) => {
                                state.loadingState = LoadingState.Error
                        })
        }
})

export const {
        setActiveCategory,
} = categorySlice.actions

export default categorySlice.reducer
