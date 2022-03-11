import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getAuthUserDate} from "./userSlice";

export interface AppState {
        initialized: boolean,
}

const initialState: AppState = {
        initialized: false,
}

export const initializeApp = createAsyncThunk(
        'initializeApp ',
        async (_, {dispatch}) => {
                let promise = dispatch(getAuthUserDate())

                return Promise.all([promise]).then(() => {
                        dispatch(initializedSuccess())
                })
        }
)

export const appSlice = createSlice({
        name: 'app',
        initialState,
        reducers: {
                initializedSuccess: (state) => {
                        state.initialized = true
                },
        },
        extraReducers: builder => {
                builder
                        .addCase(initializeApp.fulfilled, (state, action) => {
                                state.initialized = true
                        })
        }
})

export const {
        initializedSuccess
} = appSlice.actions

export default appSlice.reducer
