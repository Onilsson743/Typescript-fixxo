export interface product {
    articleNumber: string
    category: string
    description?: string
    imageName: string
    name: string
    price: number
    rating: number
    quantity?: number
}

export interface productItem {
    item: product
}

// export interface Contact {
//     name:
// }