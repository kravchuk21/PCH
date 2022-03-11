import {CreateUserDto, LoginDto, ResponseUser} from './types';
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:3008",
    withCredentials: true,
})


export const userAPI = {
    async register(dto: CreateUserDto) {
        const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/register', dto);
        return data;
    },
    async login(dto: LoginDto) {
        const {data} = await instance.post<LoginDto, { data: ResponseUser }>('/auth/login', dto);
        console.log(data)
        return data;
    },
    async getMe(token: string) {
        const {data} = await instance.get<ResponseUser | null>('/users/me', {headers: {"Authorization": `Bearer ${token}`}});
        return data;
    },
};
