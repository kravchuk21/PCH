export enum LoadingState {
    Never = "Never",
    Loading = "Loading",
    Loaded = "Loaded",
    Error = "Error"
}

export type Product = {
    id: string
    picture: string
    title: string
    description: string
    category: number
    select?: Select[]
    radio?: Check[]
    sizes: Sizes[]
}


export interface ProductToCart {
    id: string
    picture: string
    title: string
    price: number
    select: SelectItem | null
    radio: CheckItem | null
    sizes: Sizes
}

export interface ProductInCart extends ProductToCart {
    count: number,
    totalPrice: number
}


export type Check = {
    title: string
    item: CheckItem[]
}

export type CheckItem = {
    title: string
    price: number
}

export type Select = {
    title: string
    item: SelectItem[]
}

export type SelectItem = {
    title: string
    price: number
}

export type Sizes = {
    title: string
    price: number
}

export type Category = {
    title: string,
    id: number
}