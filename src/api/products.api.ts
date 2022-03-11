import {Product} from "../redux/Types";
import axios from "axios";

export const productsAPI = {
        getItems() {
                return axios.get<Array<Product>>(`/products`).then(res => res.data)
        },
        getItemById(id: string) {
                return axios.get<Product[]>(`/products?id=${id}`).then(res => res.data)
        },
        getItemByCategory(category: number) {
                return axios.get<Array<Product>>(`/products?category=${category}`).then(res => res.data)
        },
        getPopularItems() {
                return axios.get<Array<Product>>(`/products?_limit=5`).then(res => res.data)
        }
}
