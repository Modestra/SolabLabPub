export interface CardProduct {
    name: string,
    cost: number,
    location: string,
    time: string
}

export interface Category {
    id: string,
    name: string,
    parentid: string
}