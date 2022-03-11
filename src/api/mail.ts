import axios from "axios";
import {Category, ProductInCart} from "../redux/Types";

type SupportType = {
        email: string;
        fullName: string;
        text: string;
}

type OrderType = {
        email: string;
        fullName: string;
        data: ProductInCart[];
}


const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL || "http://localhost:3008",
        withCredentials: true,
})


export const mailAPI = {
        support(data: SupportType) {
                return instance.post(`/mail/support`, data).then(res => res.data)
        },
        order(data: OrderType) {
                return instance.post(`/mail/order`, data).then(res => res.data)
        }
}
