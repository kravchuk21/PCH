import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userAPI} from '../../api/user';
import {CreateUserDto, LoginDto, ResponseUser} from "../../api/types";
import {LoadingState} from "../Types";

export interface UserState {
    data: ResponseUser | null;
    errorMassage: string
    loadingState: LoadingState
}

const initialState: UserState = {
    data: null,
    errorMassage: '',
    loadingState: LoadingState.Never
};

export const getAuthUserDate = createAsyncThunk(
    'getAuthUserDate',
    async (_, thunkAPI) => {
        const token = await window.localStorage.getItem("token") || ""
        return await userAPI.getMe(token)
    }
)

export const fetchSignIn = createAsyncThunk(
    'fetchSignIn',
    async (data: LoginDto, {dispatch}) => {
        try {
            const result = await userAPI.login(data)
            window.localStorage.setItem('token', result.token);
        } catch {
            dispatch(setErrorMassage("Что-то пошло не так. Проверьте введенные данные"))
        }
    }
)

export const fetchSignUp = createAsyncThunk(
    'fetchSignUp',
    async (data: CreateUserDto, {dispatch}) => {
        try {
            return await userAPI.register(data)
        } catch {
            dispatch(setErrorMassage("Что-то пошло не так. Проверьте введенные данные"))
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<ResponseUser>) => {
            state.data = action.payload;
        },
        setErrorMassage: (state, action: PayloadAction<string>) => {
            state.errorMassage = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAuthUserDate.pending, state => {
                state.loadingState = LoadingState.Loading
            })
            .addCase(getAuthUserDate.fulfilled, (state, action) => {
                state.data = action.payload
                state.loadingState = LoadingState.Loaded
            })
            .addCase(getAuthUserDate.rejected, (state, action) => {
                state.data = null
                state.loadingState = LoadingState.Error
            })
    },
});

export const {setUserData, setErrorMassage} = userSlice.actions;

export default userSlice.reducer;



