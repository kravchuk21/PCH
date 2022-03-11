import axios from "axios";
import {Category} from "../redux/Types";

export const categoryAPI = {
    getItems() {
        return axios.get<Array<Category>>(`/categories`).then(res => res.data)
    }
}
